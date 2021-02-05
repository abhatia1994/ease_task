module.exports = function (app) {
  var nodemailer = require("nodemailer");

  app.post("/send-email", (request, response) => {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    var mailOptions = {
      from: "easetask09@gmail.com",
      to: request.body.data.email,
      subject: "Welcome to Ease Task",
      text: "Click here to sign in.",
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });
};
