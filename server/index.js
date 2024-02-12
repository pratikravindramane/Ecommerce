const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const { notFound, errorHandler } = require("./middlewares/errorHandler");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const connect = () => {
  try {
    mongoose.connect(process.env.DB);
    console.log("connected to database");
  } catch (error) {
    console.log(error);
  }
};

app.use("/", authRoute);
app.use(notFound);
app.use(errorHandler);
app.listen(process.env.PORT, () => {
  connect();
  console.log("connected on port 3000");
});
