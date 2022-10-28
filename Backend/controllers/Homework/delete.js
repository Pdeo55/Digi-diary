const Homework = require("../../models/homework");

const cloudinary = require("cloudinary");
const {roles} = require("../../utils/roles");

const deletehomework = async (req, res) => {
    try {
      let task = await Homework.findById(req.params.id);
  
      let del = await cloudinary.v2.uploader.destroy(task.cloudinary_id);
      console.log(del);
      Homework.deleteOne({ _id: req.params.id }, function (err) {
        if (err) {
          return res.status(400).json({ error: err.message });
        }
        return res.status(200).json({ message: "Deleted Successfully..." });
      });
    } catch (error) {
      return res.status(400).json({ error: error });
    }
  };
  

  module.exports = { deletehomework };