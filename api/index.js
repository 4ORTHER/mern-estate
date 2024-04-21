const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
  console.log("Connected to MongoDB!");
}).catch((err) => {
  console.log(err);
});

const app = express();

app.listen(process.env.PORT, () => {
  console.log("Server is running on port " + process.env.PORT);
});
