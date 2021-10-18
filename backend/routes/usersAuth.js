const express = require("express");
const Joi = require("joi");

const User = require("../models/user");

const router = express.Router();

const userValidationSchema = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).email().required(),
  password: Joi.string().min(6).required(),
});

router.post("/register", async (req, res) => {
  const { error } = userValidationSchema.validate(req.body);
  console.log(error);
  if (error) return res.status(400).send(error.details[0].message);

  const user = new User({
    name: req.body.name,
    email: req.body.password,
    password: req.body.password,
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (error) {
    res.send(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
