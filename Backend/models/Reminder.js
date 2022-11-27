const mongoose = require("mongoose");

const ReminderSchema = new mongoose.Schema(
  {
   msg:String,
   time:String,
   Isreminded:Boolean,
   studentId:String,
   wpPhone:Number,

  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Reminder", ReminderSchema);
