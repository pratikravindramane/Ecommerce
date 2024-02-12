const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/useModel");
const authMiddleware = asyncHandler(async (req, res, next) => {
  let token;
  if (req?.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    if (token) {
      const decode = jwt.verify(token, process.env.JWT);
      const user = await User.findById(decode.id);
      req.user = user;
      next();
    }
  } else {
    throw new Error("there is no token attached to header");
  }
});
const isAdmin = asyncHandler(async (req, res, next) => {
  const { email } = req.user;
  const adminUser = await User.findOne({ email });
  if (adminUser.role === "admin") {
    next();
  } else {
    throw new Error("you are not an Admin");
  }
});
module.exports = { authMiddleware, isAdmin };
