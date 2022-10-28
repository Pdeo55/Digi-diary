const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema(
  {
   title:String,
   description:String,
   subject:String,
   grade:String,
   teacherid:String,
   cloudinary_id: {
    type: String,
  },
  attachment: {
    type: String,
   
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("homework", homeworkSchema);
