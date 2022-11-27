const Reminder = require("../../models/Reminder");

const getAllreminders = async (req, res) => {
  try {
    const getreminders = await Reminder.find({}).sort({ createdAt: -1 });
    res.status(200).json(getreminders);
  } catch (error) {
    res.status(400).json({ error: error.message });
    
  }
};

const addreminders = async (req, res) => {
  const { msg, time, studentId,  wpPhone } = req.body;


  try {
    const reminder = await Reminder.create({
      msg,
      time,
      studentId,
      wpPhone,
      Isreminded: false,
    });

    res.status(200).json(reminder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllreminders, addreminders };
