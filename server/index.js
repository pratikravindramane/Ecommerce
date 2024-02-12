const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const connect = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

app.listen(process.env.PORT, () => {
  connect();
  console.log("connected");
});
const app = express();
