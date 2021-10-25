const express = require("express");
const { BASIC, ADMIN } = require("../Constants");
const router = express.Router();

const Order = require("../models/placeOrder");
const Product = require("../models/product");
const { verifyPermission } = require("../verifyToken");

router.post("/place-order", verifyPermission(BASIC), async (req, res) => {
  const order = new Order({
    cartItems: req.body.cartItems,
    cartTotal: req.body.cartTotal,
    userDetails: req.body.userDetails,
  });

  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/orders", verifyPermission(ADMIN), async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
