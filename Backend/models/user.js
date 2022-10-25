const mongoose = require("mongoose");
const roles = require("../utils/roles")

const UserSchema = new mongoose.Schema(
  {
   name:String,
   phoneNo:{type:Number,unique:true},
   email:{type:String,unique:true},
   password:String,
   class:String,
   token:String,
   role:{
    type:String,
    enum:[roles.Admin,roles.Student,roles.Teacher],
    default:roles.Student,
   }
 
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
