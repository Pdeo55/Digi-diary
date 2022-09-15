const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
   Name:String,
   PhoneNo:Number,
   email:String,
   password:String,
   class:String,
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
