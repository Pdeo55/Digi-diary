const express = require("express");
const {addHomework, getAllhomework} = require('../controllers/Homework/homework.js')
const homeworkRouter = express.Router();

homeworkRouter.post("/add", addHomework);
homeworkRouter.get("/get", getAllhomework);

module.exports = homeworkRouter;
