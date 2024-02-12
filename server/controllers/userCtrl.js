const { generateToken } = require("../config/jwtToken");
const User = require("../models/useModel");
const asyncHandler = require("express-async-handler");
const createUser = asyncHandler(async (req, res) => {
  const findUser = await User.findOne({ email: req.body.email });
  if (!findUser) {
    const newUser = new User(req.body);
    await newUser.save();
    res.send(newUser);
  } else {
    throw new Error("User Already Exists");
  }
});
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    res.json({ ...findUser._doc, token: generateToken(findUser?._id) });
  } else {
    throw new Error("Invalid Credentials");
  }
});
module.exports = { createUser, loginUserCtrl };
