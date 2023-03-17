const AWS = require("aws-sdk");

const S3 = require("../middleware/aws-config");

const fileUpload = async (uploadData) => {
  const uploadParams = {

    Bucket: uploadData?.bucket,
    Key: uploadData?.key,
    Body: uploadData?.file,
    ContentType:uploadData?.mimetype,
    
  };

  try {
    const data = await S3.upload (uploadParams)?.promise();
    console.log(`File uploaded successfully. ${data.Location}`);
    return data;
  } catch (error) {
  
    console.log({ error: error.message })
  }
};

const deleteObject = (Deletedata) => {
    var params = {
      Bucket: Deletedata?.bucket,
      Key: Deletedata?.key,
      };
  try {
  const data= S3.deleteObject(params?.promise());
  return data;
  } catch (err) {
    console.log({ error: error.message })
  }
  };
  
module.exports = {fileUpload,deleteObject};
