const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema(
  {
   title:String,
   description:String,
   subject:String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("homework", homeworkSchema);
