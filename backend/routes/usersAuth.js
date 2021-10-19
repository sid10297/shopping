const express = require("express");
// const Joi = require("joi");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verifyToken, verifyPermission } = require("../verifyToken");

const User = require("../models/user");
const { registerValidation, loginValidation } = require("../validation");
const user = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) return res.status(400).send("Email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  });
  try {
    const savedUser = await user.save();
    const token = jwt.sign(
      {
        _id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
      process.env.TOKEN_SECRET
    );

    res.header("auth-token", token).send(token);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) return res.status(400).send("Email or password is invalid!");

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword)
    return res.status(400).send("Email or password is invalid!");

  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    process.env.TOKEN_SECRET
  );

  res.header("auth-token", token).send(token);
});

router.get("/users", verifyPermission("ADMIN"), async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
