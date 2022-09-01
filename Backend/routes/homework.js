const express = require("express");
const addhomework = require("../controllers/homework/addhomework");
const gethomework = require("../controllers/homework/gethomework");
const homeworkRouter = express.Router();

homeworkRouter.post("/add", addhomework);
homeworkRouter.get("/get", gethomework);

module.exports = homeworkRouter;
