const user = require("../models/user");

exports.IsTeacher = async (userid) => {
  
    // const userid = req.params.id;
    const Role = await user.findOne({ _id: userid }, "role");

    const ans = Role.role === "TEACHER" ? true : false;
    return ans;
 
};
const IsStudent = async (userid) => {
  
  try {
    // const userid = req.params.id;
    const role = await user.findOne({ _id: userid }, "role");

    if (role === "STUDENT") {
      console.log("student");
      return true;
    } else {
      return false;
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// module.exports = { IsStudent, IsTeacher };
