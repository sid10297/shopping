const express = require("express");
const { BASIC, ADMIN } = require("../Constants");
const router = express.Router();

const Order = require("../models/placeOrder");
const Product = require("../models/product");
const { verifyPermission } = require("../verifyToken");

// Place order API
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
      // Saving order
      const newOrder = await order.save();

      // Get purchased product's ID's in an array
      const ids = newOrder.cartItems.map((_product) => _product.product._id);

      // Get purchased product's quantity in an array
      const quantityToOrder = newOrder.cartItems.map(
        (_product) => _product.quantityToOrder
      );

      // Get products only with the same ID's
      const productQuantityToBeDecremented = await Product.find({ _id: ids });

      // Available Quantity
      const quantityAvailable = productQuantityToBeDecremented.map(
        (n) => n.quantityAvailable
      );

      // Decrement Available quantity based on ordered quantity
      const decrementQuantity = quantityAvailable.map((item, index) => {
        return item - quantityToOrder[index];
      });

      // Run for loop to run findByIdAndUpdate on multiple ID's
      for (let i = 0; i < ids.length; i++) {
        await Product.findByIdAndUpdate(
          { _id: ids[i] },
          {
            quantityAvailable: decrementQuantity[i],
          }
        );
      }

      // return newOrder
      res.json(newOrder);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
);

// Get all the orders (Only for ADMIN)
router.get("/orders", verifyPermission(ADMIN), async (req, res) => {
  try {
    // sort orders based on latest orders made
    const orders = await Order.find().sort({ $natural: -1 });
    res.json(orders);
  } catch (error) {
    res.send(error);
  }
});

// Get all the orders (Only for BASIC)
router.get("/orders/:id", verifyPermission(BASIC), async (req, res) => {
  try {
    // sort orders based on latest orders made
    console.log(req.params.id);
    const orders = await Order.find().sort({
      $natural: -1,
    });

    // Get all orders
    const order = orders.map((_order) => _order.userDetails._id);

    // Get orders only for specific user
    const getOrdersForUserWithId = () => {
      for (let i = 0; i <= order.length; i++) {
        const output = order[i];

        // compare the ids
        if (output === req.params.id) {
          // filter the ids and get orders
          const ordersList = orders.filter(
            (_order) => _order.userDetails._id === req.params.id
          );

          // return the orders
          return ordersList;
        }
      }
    };
    res.json(getOrdersForUserWithId());
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
