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

// Initialize Router
const router = express.Router();

// Register a new unique user
router.post("/register", async (req, res) => {
  // Check if body contains valid values
  const { error } = registerValidation(req.body);
  if (error) return res.status(403).send(error.details[0].message);

  // Check if email already exists
  const emailExists = await User.findOne({
    email: req.body.email,
  });

  if (emailExists) return res.status(400).send(EMAIL_EXISTS);

  // Generate Salt
  const salt = await bcrypt.genSalt(10);

  // Hash password by providing salt
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  // Create new user
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    role: req.body.role,
  });
  try {
    // Save new user to the User Model in the database
    const savedUser = await user.save();
    res.status(201).send(ACCOUNT_CREATED);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Login a user who already exists
router.post("/login", async (req, res) => {
  // Check if body is valid
  const { error } = loginValidation(req.body);
  if (error) return res.status(403).json(error.details[0].message);

  // Check if email already exists
  const user = await User.findOne({
    email: req.body.email,
  });

  if (!user) return res.status(400).send(CREDENTIALS_INVALID);

  // Compare password with the hashed one
  const validPassword = await bcrypt.compare(req.body.password, user.password);

  if (!validPassword) return res.status(400).send(CREDENTIALS_INVALID);

  // Generate JWT and get lower mentioned info
  const token = jwt.sign(
    {
      _id: user._id,
      email: user.email,
      name: user.name,
      role: user.role,
    },
    process.env.TOKEN_SECRET
  );

  // Provide token inside the headers
  res.header("auth-token", token).send(token);
});

// Get users info API
router.get("/users", verifyPermission(ADMIN), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
