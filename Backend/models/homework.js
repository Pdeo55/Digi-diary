const mongoose = require("mongoose");

const homeworkSchema = new mongoose.Schema(
  {
   title:String,
   description:String,
   subject:String,
   grade:String,
   assignDate:String,
   subDate:String,
   teacherid:String,
   studentId:String,
   queQuery:String,
   queId:String,
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
