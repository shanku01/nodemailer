import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shashankpradhan911@gmail.com',
        pass: 'xslkfjqtsgcultsf'
    }
});

var mailOptions = {
    from: 'shashankpradhan911@gmail.com',
    to: 'shashankpradhan199@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});