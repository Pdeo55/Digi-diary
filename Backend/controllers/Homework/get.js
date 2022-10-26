const Homework = require("../../models/homework");
const user = require("../../models/user")




const getAllhomework = async (req, res) => {
  try {
    const homeworks = await Homework.find({}).sort({ createdAt: -1 });
    res.status(200).json(homeworks);
 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



module.exports = { getAllhomework};
