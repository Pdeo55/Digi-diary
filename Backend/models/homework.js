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
   aws_S3_Etag: {
    type: String,
  },
  attachment: {
    type: String,
   
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("homework", homeworkSchema);
