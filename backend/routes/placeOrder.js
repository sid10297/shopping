const express = require("express");
const { BASIC, ADMIN } = require("../Constants");
const router = express.Router();

const Order = require("../models/placeOrder");
const Product = require("../models/product");
const { verifyPermission } = require("../verifyToken");

router.post(
  "/place-order",
  verifyPermission(BASIC, ADMIN),
  async (req, res) => {
    const order = new Order({
      cartItems: req.body.cartItems,
      cartTotal: req.body.cartTotal,
      userDetails: req.body.userDetails,
    });

    try {
      const newOrder = await order.save();
      const ids = newOrder.cartItems.map((_product) => _product.product._id);
      const quantityToOrder = newOrder.cartItems.map(
        (_product) => _product.quantityToOrder
      );

      const productQuantityToBeDecremented = await Product.find({ _id: ids });
      const quantityAvailable = productQuantityToBeDecremented.map(
        (n) => n.quantityAvailable
      );
      const decrementQuantity = quantityAvailable.map((item, index) => {
        return item - quantityToOrder[index];
      });

      for (let i = 0; i < ids.length; i++) {
        await Product.findByIdAndUpdate(
          { _id: ids[i] },
          {
            quantityAvailable: decrementQuantity[i],
          }
        );
      }

      res.json(newOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

router.get("/orders", verifyPermission(ADMIN), async (req, res) => {
  try {
    const orders = await Order.find().sort({ $natural: -1 });
    res.json(orders);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
