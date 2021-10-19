const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
  },
  description: {
    type: String,
    minlength: 3,
    maxlength: 40,
    required: true,
  },
  price: {
    type: Number,
    min: 10,
    max: 100000,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
