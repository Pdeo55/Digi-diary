const express = require("express");
const { getAllreminders, addreminders } = require('../controllers/Reminder/Reminder')
const remindersRouter = express.Router();

remindersRouter.post("/add", addreminders);
remindersRouter.get("/get", getAllreminders);

module.exports = remindersRouter;
