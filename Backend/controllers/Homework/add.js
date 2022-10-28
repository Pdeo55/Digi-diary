const Homework = require("../../models/homework");

const cloudinary = require("cloudinary");
const {roles} = require("../../utils/roles");

const addHomework = async (req, res) => {
    const { title, description, subject,grade,teacherid } = req.body;
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
        grade,
        teacherid,
        attachment: attach.secure_url,
        cloudinary_id: attach.public_id,
      });
      console.log(homework);
      res.status(200).json(homework);
    } catch (error) {
      res.status(400).json({ error: error.message });
    
    }
  };
  
  module.exports = { addHomework };