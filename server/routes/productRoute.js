const { createProduct, getaProdut } = require("../controllers/productCtrl");

const router = require("express").Router();

router.get("/:id", getaProdut);
router.post("/", createProduct);
module.exports = router;
