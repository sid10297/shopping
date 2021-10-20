const express = require("express");
const router = express.Router();

const Order = require("../models/placeOrder");
const { verifyPermission } = require("../verifyToken");

router.post("/place-order", verifyPermission("BASIC"), async (req, res) => {
  const order = new Order({
    cartItems: req.body.cartItems,
    cartTotal: req.body.cartTotal,
  });

  try {
    const newOrder = await order.save();
    res.json(newOrder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
