const fileUpload =require( "../../utils/fileUpload.js");
const Homework = require("../../models/homework");
const callBack = require("../../utils/callBack")
const fs = require("fs");


// const cloudinary = require("cloudinary");
const { roles } = require("../../utils/roles");

const addHomework = async (req, res) => {
  const { title, description, subject, grade, teacherid, assignDate, subDate } =
    req.body;
 const file = req.files.attachment;

 
  const fileContent = fs.readFileSync(file.tempFilePath);

  var key = file.name;
  const bucket = `${process.env.AWS_BUCKET}/homework`;

  const mimetype = file.mimetype;

  const uploadParams = {
    bucket: bucket,
    file: fileContent,
    key: key,
    mimetype: mimetype,
  };

  try {
    const data = await fileUpload(
      uploadParams,
      (url) => {
        if (url) {
          Homework.create(
            { attachment: url },
            callBack(err, response)
          );
        }
      },
     
      (err) => {
        res.status(200).send({ status: "failed", message: err?.message });
      }
    );
  

    const homework = await Homework.create({
      title,
      description,
      subject,
      grade,
      teacherid,
      subDate,
      assignDate,
      attachment: data.Location,
      aws_S3_Etag: data.ETag,
    });
    
    res.status(200).json(homework);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { addHomework };

// let attach = await cloudinary.v2.uploader.upload(
//   req.files.attachment.tempFilePath,
//   {
//     folder: "homework",
//   }
// );
