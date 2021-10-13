const express = require("express");
const Product = require("../models/product");

const router = express.Router();

router.post("/", (req, res) => {
  console.log(req.body);
});

module.exports = router;
