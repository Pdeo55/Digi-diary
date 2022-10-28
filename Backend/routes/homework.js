const express = require("express");
const {addHomework} = require('../controllers/Homework/add')
const {getAllhomework,homeworkbygrade,homeworkbyteacher} = require('../controllers/Homework/get')
const {deletehomework} = require("../controllers/Homework/delete")
const homeworkRouter = express.Router();
const grantAccess = require("../middleware/access")

homeworkRouter.post("/add",addHomework);
homeworkRouter.get("/get",getAllhomework);

homeworkRouter.get("/getbygrade/:id",homeworkbygrade);
homeworkRouter.get("/getbyteacher/:id",homeworkbyteacher);
homeworkRouter.get("/delete/:id",deletehomework);


module.exports = homeworkRouter;
