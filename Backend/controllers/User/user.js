const User = require("../../models/user");

const getAllUser = async (req, res) => {
  try {
    const getuser = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(getuser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addUser = async (req, res) => {
  const { Name, PhoneNo, email, password } = req.body;

  try {
    const adduser = await User.create({
      Name,
      PhoneNo,
      email,
      password,
      class: req.body.class,
    });
    res.status(200).json(adduser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllUser ,addUser};
