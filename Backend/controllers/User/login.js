const User = require("../../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require('../../middleware/config');



const login = async (req, res) => {
  const { email, password } = req.body;
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }
  try {
    const user = await User.findOne({ email });
   const pass = await bcrypt.compare(password, user.password)
// console.log(pass)
    if (user && pass) {
      const token = jwt.sign({ user_id: user._id, email }, config.TOKEN_KEY, {
        expiresIn: "2h",
      });


      user.token = token;
      res.status(200).json(user);
    }

    res.status(400).send("Invalid Credentials");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {login };
