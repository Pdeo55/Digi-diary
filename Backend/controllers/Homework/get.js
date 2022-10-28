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

const homeworkbygrade = async(req,res)=>{
try {
  const userid = req.params.id;

  const gradeofuser = await user.findOne({_id:userid},"grade");
 

  const homework = await Homework.find({grade:gradeofuser.grade});
   res.status(200).json(homework);

  
} catch (error) {
  res.status(400).json({ error: error.message });
}
};

const homeworkbyteacher = async(req,res)=>{
  try {
    const teacherid = req.params.id;

    const homework = await Homework.find({teacherid:teacherid});
     res.status(200).json(homework);
  
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  };




module.exports = { getAllhomework,homeworkbygrade,homeworkbyteacher};
