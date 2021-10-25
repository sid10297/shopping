const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verifyPermission } = require("../verifyToken");

const User = require("../models/user");
const { registerValidation, loginValidation } = require("../validation");
const {
  ADMIN,
  EMAIL_EXISTS,
  ACCOUNT_CREATED,
  CREDENTIALS_INVALID,
} = require("../Constants");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) return res.status(400).send(EMAIL_EXISTS);

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

    res.status(201).send(ACCOUNT_CREATED);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(403).json(error.details[0].message);

  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) return res.status(400).send(CREDENTIALS_INVALID);

  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send(CREDENTIALS_INVALID);

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

router.get("/users", verifyPermission(ADMIN), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
