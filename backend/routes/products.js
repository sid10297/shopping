const express = require("express");
const Joi = require("joi");

const Product = require("../models/product");
const { productValidation } = require("../validation");
const { verifyPermission } = require("../verifyToken");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({
      price: { $gt: 0, $lt: 10000 },
    }).sort({ price: -1 });
    res.send(products);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

// Get a single product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Create a product
router.post("/products", verifyPermission("ADMIN"), async (req, res) => {
  const { error } = productValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const { title, description, price, quantity, image } = req.body;
  const product = new Product({
    title,
    description,
    price,
    quantity,
    image,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.send({ message: error });
  }
});

// Update a product
router.patch("/products/:id", verifyPermission("ADMIN"), async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).send("Product not found!");
  const { title, description, price, quantity, image } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      title,
      description,
      price,
      quantity,
      image,
    });
    res.send(updatedProduct);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Delete a product
router.delete("/products/:id", verifyPermission("ADMIN"), async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send("Product not found!");

  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
