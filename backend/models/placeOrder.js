const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  cartItems: Array,
  cartTotal: Number,
});

module.exports = mongoose.model("orders", orderSchema);
