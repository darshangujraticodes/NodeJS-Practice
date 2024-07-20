const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
//dotenv.load();

const PORT = process.env.PORT || 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome Nodemail HomePage !!");
});

app.get("/mail", (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const receiver = {
    from: process.env.SMTP_MAIL,
    to: "darshan17.realatte@gmail.com,rohitpani5678@gmail.com,shyamgupta7028@gmail.com,sagar490r@gmail.com ",
    subject: "Hello Friend Darshan here, Testing NodeJS mailer !",
    text: "NodeJs mailer code is working , do acknowledge once you received this mail !!",
  };

  auth.sendMail(receiver, (error, emailResponse) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Success !!", emailResponse);
      res.send("Mail Send Successfully !");
    }
  });
});

app.listen(PORT, (error) => {
  if (error) console.log(error);
  console.log(`Server is listening on PORT = ${PORT}`);
});
