const holidays = require("../models/holidays");

const cloudinary = require("cloudinary")


const getAllholidays = async (req, res) => {
  try {
    const getholidays = await holidays.find({}).sort({ createdAt: -1 });
    res.status(200).json(getholidays);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addholidays = async (req, res) => {
  const { title} = req.body;
  try {
    let attach = await cloudinary.v2.uploader.upload(
      req.files.attachment.tempFilePath,
      {
        folder: "holidays",
      }
    );
    const newholidays = await holidays.create({
      title,
      attachment: attach.secure_url,
      cloudinary_id: attach.public_id,
    });
    console.log(newholidays);
    res.status(200).json(newholidays);
  } catch (error) {
    res.status(400).json({ error: error.message });
  
  }
};

module.exports = { getAllholidays, addholidays };
