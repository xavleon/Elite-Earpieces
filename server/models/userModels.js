const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 6,
  },
  confirmPassword: {
    type: String,
    trim: true,
    minlength: 3,
    validate: {
      validator: function (v) {
        return this.password === v;
      },
      message: "Passwords do not match",
    },
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },

  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);
module.exports = User;
