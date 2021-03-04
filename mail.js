// install nodemailer
// install smtp
// we can enable our mail access in our mail setting path

// It is an nodemailer module
var nodemailer = require('nodemailer');

// we can enter the mail process in this stage
var transporter = nodemailer.createTransport({
  service: 'gmail',
  type:"SMTP",
  host: 'smtp.gmail.com',
    port: 465,
    secure: true,
  auth: {
    user: 'please enter your mail id',
    pass: 'enter your password'
  }
});

var mailOptions = {
  from: 'please enter the from mail id',
  to: 'please enter the to mail id',
  subject: 'Its Me Karthick',
  text: 'hi Shahul!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
