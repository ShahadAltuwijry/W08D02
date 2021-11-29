const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, unique: true },
  password: { type: String },
  permissions: [{ type: mongoose.Schema.Types.ObjectId, ref: "role" }],
});

module.exports = mongoose.model("User", user);
