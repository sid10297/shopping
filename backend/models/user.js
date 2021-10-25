const mongoose = require("mongoose");
const { ADMIN, BASIC } = require("../Constants");

// Create separate roles for the users
const roleType = {
  admin: ADMIN,
  basic: BASIC,
};

// Create user schema
const UserSchema = new mongoose.Schema({
  role: { type: String, default: roleType.basic },
  name: { type: String, required: true, min: 3, max: 255 },
  email: { type: String, required: true, min: 3, max: 255 },
  password: { type: String, required: true, min: 3, max: 1024 },
});

// Create user model and export
module.exports = mongoose.model("User", UserSchema);
