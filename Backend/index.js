require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary");
const homeworkRouter = require("./routes/homework");
const remindersRouter = require("./routes/Reminder")

const UserRouter = require("./routes/user");
const holidaysRouter = require("./routes/holidays");
const auth = require("./middleware/Auth");
const SetReminder =require("./utils/SetReminder")

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


cloudinary.config({
  cloud_name: "dauyolf5r",
  api_key: "717465827265157",
  api_secret: "zWyi2rcKjVE0bewh10psQqMVhkU",
});

// const a =process.env.CLOUDINARY_CLOUD_NAME
// console.log(a)


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
    "mongodb+srv://Work:Work123@cluster0.c2p2qtq.mongodb.net/?retryWrites=true&w=majority",
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
