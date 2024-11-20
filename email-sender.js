const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "zarradiheb007@gmail.com",
    pass: "Nice Try",
  },
});

const emailOptions = {
  from: "vscode.@gmail.com",
  to: ["zarradiheb17@gmail.com", "zarradiheb007@gmail.com"],
  subject: "Just For Fun Number 1000",
  text: "Hello There I hope You doing Well",
};

transporter.sendMail(emailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: Great Job!!");
  }
});
