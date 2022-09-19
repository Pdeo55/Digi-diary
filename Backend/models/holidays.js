const mongoose = require("mongoose");

const holidaysSchema = new mongoose.Schema(
  {
   title:String,
   cloudinary_id: {
    type: String,
  },
  attachment: {
    type: String,
   
  },
  },
  { timestamps: true }
);

module.exports = mongoose.model("holidays", holidaysSchema);
