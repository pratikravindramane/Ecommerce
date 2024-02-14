const {
  createProduct,
  getaProdut,
  getAll,
  addToWishlist,
  rating,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCtrl");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { isAdmin } = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", authMiddleware, isAdmin, createProduct);

router.get("/:id", getaProdut);
router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);

router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

router.get("/", getAll);

module.exports = router;
