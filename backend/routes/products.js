const express = require("express");
const Joi = require("joi");
const { ADMIN, PRODUCT_NOT_FOUND } = require("../Constants");

const Product = require("../models/product");
const { productValidation } = require("../validation");
const { verifyPermission } = require("../verifyToken");

const router = express.Router();

// Get all products
router.get("/products", async (req, res) => {
  try {
    const products = await Product.find();
    res.send(products);
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

// Get a single product
router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(404).send(error);
  }
});

// Create a product
router.post("/products", verifyPermission(ADMIN), async (req, res) => {
  const { error } = productValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const { title, description, price, quantityAvailable, image } = req.body;
  const product = new Product({
    title,
    description,
    price,
    quantityAvailable,
    image,
  });
  try {
    const savedProduct = await product.save();
    res.json(savedProduct);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a product
router.patch("/products/:id", verifyPermission(ADMIN), async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).send(PRODUCT_NOT_FOUND);
  const { title, description, price, quantityAvailable, image } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      title,
      description,
      price,
      quantityAvailable,
      image,
    });
    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json(error.message);
  }
});

// Delete a product
router.delete("/products/:id", verifyPermission("ADMIN"), async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) return res.status(404).send(PRODUCT_NOT_FOUND);

  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.send(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
