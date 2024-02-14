const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");
const router = express.Router();

// router.post("/", authMiddleware, isAdmin, createBlog);

// router.put("/:id", authMiddleware, isAdmin, updateBlog);

// router.get("/:id", getblgs);
// router.get("/", getAllBlogs);

// router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

module.exports = router;
