const path = require("path");
const products = require("../models/productModels");

exports.getProducts = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProducts = (req, res) => {
  // res.send(htmlForm);

  const name = req.body.name;
  const brand = req.body.brand;
  const product = {
    name,
    brand,
  };
  products.push(product);
  res.status(201).json({
    success: true,
    products,
  });
};
