const express = require("express");
const {addHomework} = require('../controllers/Homework/add')
const {getAllhomework,homeworkbygrade} = require('../controllers/Homework/get')
const homeworkRouter = express.Router();
const grantAccess = require("../middleware/access")

homeworkRouter.post("/add",addHomework);
homeworkRouter.get("/get",getAllhomework);
homeworkRouter.get("/get/:id",homeworkbygrade);


module.exports = homeworkRouter;
