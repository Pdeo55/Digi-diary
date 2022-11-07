const express = require("express");
const {addHomework} = require('../controllers/Homework/add')
const {queQuery,getQuery }=require('../controllers/Homework/queQuery')
const {getAllhomework,homeworkbygrade,homeworkbyteacher} = require('../controllers/Homework/get')
const {deletehomework} = require("../controllers/Homework/delete")
const homeworkRouter = express.Router();
const grantAccess = require("../middleware/access")

homeworkRouter.post("/add",addHomework);
homeworkRouter.get("/get",getAllhomework);

homeworkRouter.get("/getbygrade/:id",homeworkbygrade);
homeworkRouter.get("/getbyteacher/:id",homeworkbyteacher);
homeworkRouter.delete("/delete/:id",deletehomework);
homeworkRouter.post("/QuestionQuery",queQuery);
homeworkRouter.get("/getQuestionQuery",getQuery);


module.exports = homeworkRouter;
