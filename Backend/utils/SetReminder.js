const Reminder = require("../models/Reminder");

const SetReminder = Reminder.find({}, (err, reminderList) => {
  try {
    if (reminderList) {
      reminderList.forEach((reminder) => {
        if (!reminder.Isreminded) {
          const now = new Date();
          const a =now.getTime();
          console.log(a);
          const phone = reminder.wpPhone;

          if (new Date(reminder.time) - now < 0) {
            Reminder.findByIdAndUpdate(
              reminder._id,
              { Isreminded: true },
              (err, remindObj) => {
                if (err) {
                  console.log(err);
                }
                const accountSid = process.env.ACCOUNT_SID;
                const authToken = process.env.AUTH_TOKEN;


                const client = require("twilio")(accountSid, authToken);
                client.messages
                  .create({
                    body: reminder.msg,
                    from: "whatsapp:+14155238886",
                    to: `whatsapp:+91${phone}`, //YOUR PHONE NUMBER INSTEAD OF 8888888888
                  })
                  .then((message) => console.log(message.sid))
                  .done();
              }
            );
          }
        }
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = SetReminder;
