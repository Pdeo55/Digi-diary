const express = require("express");
const {addUser} = require('../controllers/User/register');
const{login}= require("../controllers/User/login")
const UserRouter = express.Router();

UserRouter.post("/login", login);
UserRouter.post("/register", addUser);



module.exports = UserRouter;
