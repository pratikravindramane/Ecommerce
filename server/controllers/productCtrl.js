const asyncHandler = require("express-async-handler");
const Product = require("../models/productModel.js");
const validateMongoDbId = require("../utils/validateMongodbId.js");
const createProduct = asyncHandler(async (req, res) => {
  try {
    // if (req.body.title) {
    //   req.body.slug = slugify(req.body.title);
    // }
    const newProduct = await Product.create(req.body);
    res.json(newProduct);
  } catch (error) {
    throw new Error(error);
  }
});

// get a product
const getaProdut = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const product = await Product.findById(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
});

// get all product
const getAll = asyncHandler(async (req, res) => {
  try {
    const all = await Product.find({});
    res.send(all);
  } catch (error) {
    throw new Error(error);
  }
});
module.exports = { createProduct, getaProdut };
