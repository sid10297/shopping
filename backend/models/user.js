const mongoose = require("mongoose");

const roleType = {
  admin: "ADMIN",
  basic: "BASIC",
};

const UserSchema = new mongoose.Schema({
  role: {
    type: String,
    default: roleType.basic,
  },
  name: { type: String, required: true, min: 3, max: 255 },
  email: { type: String, required: true, min: 3, max: 255 },
  password: { type: String, required: true, min: 3, max: 1024 },
});

module.exports = mongoose.model("User", UserSchema);
