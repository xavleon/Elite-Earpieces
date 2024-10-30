const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRouter = require("./routes/userRoutes");

console.log("server");
app.use(cors());
app.use(express.json());

app.use("/user", userRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
