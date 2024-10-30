const User = require("../models/userModels");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.doSignup = async (req, res) => {
  try {
    // 1. Get user input (body data)
    const data = req.body;
    // 2. Check if user already exists
    const user = await User.findOne({ email: data.email });
    console.log(user);

    if (user) {
      throw new Error("User already exists");
    }

    // 3. validate passwords
    if (data.password !== data.confirmPassword) {
      throw new Error("Passwords do not match");
    }

    // 4. Hash the password
    const hashPassword = await bcrypt.hash(data.password, 10);
    data.password = hashPassword;

    // 4. Create a new user
    const newUser = new User({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });

    await newUser.save();

    // 5. send back the user
    res.status(201).send({
      message: "User created successfully",
      user: newUser,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      message: err.message,
    });
  }
};

exports.doLogin = async (req, res) => {
  try {
    //1 Get user input
    const data = req.body;
    console.log(data);

    //2 Check if user exists
    const user = await User.findOne({ email: data.email }).populate(
      "favorites",
      "_id name"
    );

    console.log(user);

    //3 Check if password is correct
    //console.log(data, user);

    // 3. check if hash password is correct

    const isMatch = await bcrypt.compare(data.password, user.password);

    if (!user || !isMatch) {
      throw new Error("Invalid credentials");
    }
    //4 Send back the user

    // Generate a token

    /// 1. Data
    // 2. Secret key
    // 3. Options

    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: true,
    //   maxAge: 7 * 24 * 60 * 60 * 1000,
    // });

    res.status(200).send({
      message: "Login successful",
      token,
      user,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  }
};
