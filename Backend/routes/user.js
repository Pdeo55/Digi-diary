const express = require("express");
const {addUser, getAllUser} = require('../controllers/User/user');
const UserRouter = express.Router();


UserRouter.post("/add", addUser);
UserRouter.get("/get", getAllUser);

module.exports = UserRouter;
