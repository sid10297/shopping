const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  cartItems: Array,
  cartTotal: Number,
  userDetails: Object,
});

module.exports = mongoose.model("orders", orderSchema);
