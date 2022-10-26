const express = require("express");
const {addHomework} = require('../controllers/Homework/add')
const {getAllhomework} = require('../controllers/Homework/get')
const homeworkRouter = express.Router();
const grantAccess = require("../middleware/access")

homeworkRouter.post("/add",addHomework);
homeworkRouter.get("/get",getAllhomework);


module.exports = homeworkRouter;
