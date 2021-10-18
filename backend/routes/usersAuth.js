const express = require("express");
const Joi = require("joi");

const User = require("../models/user");
const { registerValidation } = require("../validation");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) return res.status(400).send("Email already exists");

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.send(error);
  }
});

router.post("/sign-in", async (req, res) => {});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
