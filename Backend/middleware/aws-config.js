const AWS = require("aws-sdk");

module.exports = new AWS.S3({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET,
    region: "ap-south-1",
    AWS_SDK_LOAD_CONFIG:1,
    signatureVersion: 'v4',
});