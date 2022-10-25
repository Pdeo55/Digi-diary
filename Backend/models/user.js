const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: String,
    phoneNo: { type: Number, unique: true },
    email: { type: String, unique: true },
    password: String,
    grade: String,
    role: String,
    token: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
