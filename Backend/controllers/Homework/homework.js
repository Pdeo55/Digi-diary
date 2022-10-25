const Homework = require("../../models/homework");

const cloudinary = require("cloudinary");
const {roles} = require("../../utils/roles");



const getAllhomework = async (req, res) => {
  try {
    const homeworks = await Homework.find({}).sort({ createdAt: -1 });
    res.status(200).json(homeworks);
 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addHomework = async (req, res) => {
  const { title, description, subject } = req.body;
  try {
    let attach = await cloudinary.v2.uploader.upload(
      req.files.attachment.tempFilePath,
      {
        folder: "homework",
      }
    );
    const homework = await Homework.create({
      title,
      description,
      subject,
      attachment: attach.secure_url,
      cloudinary_id: attach.public_id,
    });
    console.log(homework);
    res.status(200).json(homework);
  } catch (error) {
    res.status(400).json({ error: error.message });
  
  }
};

module.exports = { getAllhomework, addHomework };
