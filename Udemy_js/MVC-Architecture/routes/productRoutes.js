const express = require("express");
const {
  getProducts,
  saveProducts,
} = require("../controllers/productController");
const router = express.Router();
router.get("/products", getProducts);

router.post("/products", saveProducts);
module.exports = router;
