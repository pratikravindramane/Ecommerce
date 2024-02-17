const { generateToken } = require("../config/jwtToken");
const User = require("../models/useModel");
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodbId");
const { generateRefreshToken } = require("../config/refreshToken");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const uniqId = require("uniqid");
const Cart = require("../models/cartModel");
const Coupon = require("../models/couponModel");
const Product = require("../models/productModel");
// register
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

// login
const loginUserCtrl = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const findUser = await User.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await User.findByIdAndUpdate(
      findUser._id,
      { refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      id: findUser?._id,
      firstname: findUser?.firstname,
      lastname: findUser?.lastname,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials");
  }
});

// admin login
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await User.findOne({ email });
    if (admin.role != "admin") throw new Error("Not Authorized");
    if (admin && (await admin.isPasswordMatched(password))) {
      // genrate new refresh token
      const refreshToken = await generateRefreshToken(admin?._id);
      const updateuser = await User.findByIdAndUpdate(
        findAdmin.id,
        {
          refreshToken: refreshToken,
        },
        { new: true }
      );
      // add refresh token in cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        expires: 72 * 60 * 60 * 1000,
      });
      // send updated token
      res.send({
        _id: findAdmin?._id,
        firstname: findAdmin?.firstname,
        lastname: findAdmin?.lastname,
        email: findAdmin?.email,
        mobile: findAdmin?.mobile,
        token: generateToken(findAdmin?._id),
      });
    }
  } catch (error) {
    throw new Error(error);
  }
});
// refresh Token TOUNDERSTAND
const handleRefreshToken = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie) throw new Error("No Refresh Token In Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) throw new Error("No Refresh token present in DB or not matched");
  jwt.verify(refreshToken, process.env.JWT, (err, decode) => {
    if (err || user._id != decode.id) {
      throw new Error("There is something wrong with refresh token");
    }
    const accessToken = generateRefreshToken(user._id);
    res.send({ accessToken });
  });
});

// logout
const logout = asyncHandler(async (req, res) => {
  const cookie = req.cookies;
  if (!cookie) throw new Error("No Refresh Token In Cookies");
  const refreshToken = cookie.refreshToken;
  const user = await User.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", { httpOnly: true, secure: true });
    return res.status(204); //forbidden
  }
  await User.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
  res.clearCookie("refreshToken", { httpOnly: true, secure: true });
  res.sendStatus(204);
});
// update a user
const updatedUser = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      { _id },
      {
        firstname: req?.body?.firstname,
        lastname: req?.body?.lastname,
        email: req?.body?.email,
        mobile: req?.body?.mobile,
        role: req?.body?.role,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});
// save user Address

const saveAddress = asyncHandler(async (req, res, next) => {
  const { _id } = req.user;
  validateMongoDbId(_id);

  try {
    const updatedUser = await User.findByIdAndUpdate(
      _id,
      {
        address: req?.body?.address,
      },
      {
        new: true,
      }
    );
    res.json(updatedUser);
  } catch (error) {
    throw new Error(error);
  }
});
// Get all users
const getallUser = asyncHandler(async (req, res) => {
  try {
    const getUsers = await User.find();
    res.json(getUsers);
  } catch (error) {
    throw new Error(error);
  }
});

// Get a single user
const getaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const getaUser = await User.findById(id);
    res.json({
      getaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// delete a single user
const deleteaUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const deleteaUser = await User.findByIdAndDelete(id);
    res.json({
      deleteaUser,
    });
  } catch (error) {
    throw new Error(error);
  }
});

// block user
const blockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const blockusr = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: true,
      },
      {
        new: true,
      }
    );
    res.json(blockusr);
  } catch (error) {
    throw new Error(error);
  }
});

// unblock a user
const unblockUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const unblock = await User.findByIdAndUpdate(
      id,
      {
        isBlocked: false,
      },
      {
        new: true,
      }
    );
    res.json({
      message: "User UnBlocked",
    });
  } catch (error) {
    throw new Error(error);
  }
});

// update password
const updatePassword = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  const { password } = req.body;
  validateMongoDbId(_id);
  const user = await User.findById(_id);
  if (password) {
    user.password = password;
    const updatedPassword = await user.save();
    res.json(updatedPassword);
  } else {
    res.json(user);
  }
});

// forget password TOUSERSTAND sendng email route
const forgotPasswordToken = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found with this email");
  try {
    const token = await user.createPasswordResetToken();
    await user.save();
    // const resetURL = `Hi, Please follow this link to reset Your Password. This link is valid till 10 minutes from now. <a href='http://localhost:5000/api/user/reset-password/${token}'>Click Here</>`;
    // const data = {
    //   to: email,
    //   text: "Hey User",
    //   subject: "Forgot Password Link",
    //   htm: resetURL,
    // };
    // sendEmail(data);
    res.json(`http://localhost:3000/reset-password/${token}`);
  } catch (error) {
    throw new Error(error);
  }
});

// reset password
const resetPassword = asyncHandler(async (req, res) => {
  const { password } = req.body;
  const { token } = req.params;
  console.log(token);
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new Error(" Token Expired, Please try again later");
  user.password = password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  res.json(user);
});

// get whishList
const getWishlist = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  try {
    const findUser = await User.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
});

// create a cart
const userCart = asyncHandler(async (req, res) => {
  const { cart } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    let products = [];
    const user = await User.findById(_id);
    // check if already exists
    const alreadyCart = await Cart.findOne({ orderby: user._id });
    if (alreadyCart) {
      alreadyCart.remove();
    }
    // add all the details in products
    for (let i = 0; i < cart.length; i++) {
      let object = {};
      object.product = cart[i].product;
      object.count = cart[i].count;
      object.color = cart[i].color;
      const getPrice = await Product.findById(cart[i]._id)
        .select("price")
        .exec();
      object.price = getPrice;
      products.push(object);
    }
    // calculate total value of the cart
    let cartTotal = 0;
    for (let i; i < products.length; i++) {
      cartTotal = cartTotal + products[i].price * products[i].count;
    }
    // create a new cart
    const newCart = await new Cart({
      products,
      cartTotal,
      orderby: user._id,
    }).save();
    res.send(newCart);
  } catch (error) {
    throw new Error(error);
  }
});
// get cart of user TOUSERSTAND POPULATE
const getUserCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const cart = await Cart.findOne({ orderby: _id }).populate(
      "products.product"
    );
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

//empty cart
const emptyCart = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const user = await User.findOne({ _id });
    const cart = await Cart.findOneAndRemove({ orderby: user._id });
    res.json(cart);
  } catch (error) {
    throw new Error(error);
  }
});

// get orders
const getOrders = asyncHandler(async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const userorders = await Order.findOne({ orderby: _id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});
// get all order form website
const getAllOrders = asyncHandler(async (req, res) => {
  try {
    const alluserorders = await Order.find()
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(alluserorders);
  } catch (error) {
    throw new Error(error);
  }
});

// getorder by of a specific user
const getOrderByUserId = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const userorders = await Order.findOne({ orderby: id })
      .populate("products.product")
      .populate("orderby")
      .exec();
    res.json(userorders);
  } catch (error) {
    throw new Error(error);
  }
});
// update order status
const updateOrderStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateOrderStatus = await Order.findByIdAndUpdate(
      id,
      {
        orderStatus: status,
        paymentIntent: {
          status: status,
        },
      },
      { new: true }
    );
    res.json(updateOrderStatus);
  } catch (error) {
    throw new Error(error);
  }
});

const applyCoupon = asyncHandler(async (req, res) => {
  const { coupon } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    // checking valid coupon
    const validCoupon = await Coupon.findone({ name: coupon });
    if (validCoupon === null) {
      throw new Error("Invalid Coupon");
    }

    // calculating total price after discount
    const user = await User.findById(_id);
    const { cartTotal } = await Cart.findOne({ orderby: user._id });
    console.log(cartTotal);
    const totalAfterDiscount =
      cartTotal - (cartTotal * validCoupon.discount) / 100;

    // updating TotalAfterDiscount
    await Cart.findOneAndUpdate(
      { orderby: user._id },
      { totalAfterDiscount },
      { new: true }
    );
    res.send(totalAfterDiscount);
  } catch (error) {
    throw new Error(error);
  }
});
// create order
const createOrder = asyncHandler(async (req, res) => {
  const { COD, couponApplied } = req.body;
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    // coupon calculation
    if (!COD) throw new Error("Create cash order failed");
    const user = await User.findById(_id);
    let userCart = await Cart.findOne({ orderby: user._id });
    let finalAmout = 0;
    if (couponApplied && userCart.totalAfterDiscount) {
      finalAmout = userCart.totalAfterDiscount;
    } else {
      finalAmout = userCart.cartTotal;
    }

    // creating new order
    const newOrder = new Order({
      products: userCart.products,
      paymentIntent: {
        id: uniqId(),
        method: "COD",
        amount: finalAmout,
        status: "Cash on Delivery",
        created: Date.now(),
        currency: "inr",
      },
      orderby: user._id,
      orderStatus: "Cash on Deliver",
    }).save();

    // update product quantity and item sold
    let update = userCart.products.map((item) => {
      return {
        updateOne: {
          filter: { _id: item.product._id },
          update: { $inc: { quantity: -item.count, sold: +item.count } },
        },
      };
    });
    // different way
    // for (let i; i < userCart.products; i++) {
    //   const updated = await Product.findById(userCart.products[i].product._id);
    //   updated.quantity - updated.quantity - userCart.products[i].count;
    //   updated.sold = updated.sold + userCart.products[i].count;
    //   updated.save();
    // }
    console.log(update);
    const updated = await Product.bulkWrite(update, {}); // TOUNDERSTAND bulkWrite
    res.json({ message: "success" });
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = {
  createUser,
  loginUserCtrl,
  logout,
  getaUser,
  getallUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  getWishlist,
  getUserCart,
  emptyCart,
  userCart,
  loginAdmin,
  saveAddress,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
  getAllOrders,
  getOrderByUserId,
};
