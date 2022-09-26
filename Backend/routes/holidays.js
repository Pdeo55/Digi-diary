const express = require("express");
const {addholidays, getAllholidays} = require('../controllers/holidays')
const holidaysRouter = express.Router();

holidaysRouter.post("/add", addholidays);
holidaysRouter.get("/get", getAllholidays);

module.exports = holidaysRouter;
