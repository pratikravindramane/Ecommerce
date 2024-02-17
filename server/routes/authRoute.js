const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getallUser,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  resetPassword,
  forgotPasswordToken,
  getUserCart,
  emptyCart,
  createOrder,
  loginAdmin,
  userCart,
  applyCoupon,
  saveAddress,
  getWishlist,
  getOrders,
  getAllOrders,
  getOrderByUserId,
  updateOrderStatus,
} = require("../controllers/userCtrl");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

router.put("/reset-password/:token", resetPassword);
router.put("/forgot-password", forgotPasswordToken);
router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.get("/all-users", getallUser);
router.get("/logout", logout);
router.get("/refresh", handleRefreshToken);
router.delete("/:id", deleteaUser);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/password", authMiddleware, updatePassword);
router.put("/save-address", authMiddleware, saveAddress);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/get-orders", authMiddleware, getOrders);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/cart", authMiddleware, getUserCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
module.exports = router;
