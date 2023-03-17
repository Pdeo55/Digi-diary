require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const homeworkRouter = require("./routes/homework");
const remindersRouter = require("./routes/Reminder")
const UserRouter = require("./routes/user");
const holidaysRouter = require("./routes/holidays");
const auth = require("./middleware/Auth");
const SetReminder =require("./utils/SetReminder");
const { CloudWatchLogs } = require("aws-sdk");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  })
);

setInterval(SetReminder,2000);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/api/homework", homeworkRouter);
app.use("/api/user", UserRouter);
app.use("/api/holidays", holidaysRouter);
app.use("/api/reminders", remindersRouter);

mongoose
  .connect(
    process.env.MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Mongodb connected successfully");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
