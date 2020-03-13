var express = require('express');
var router = express.Router();
var mime = require('mime');
var path = require('path');
var nodemailer = require('nodemailer');
var validator = require("email-validator");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
}).post('/', function(req, res, next) {
    var Name = req.body.name;
    var Email = req.body.email;
    var Phone = req.body.phone;
    var Message = req.body.message;

    console.log("nameValue:" + Name);
    console.log("email:" + Email);
    console.log("phone:" + Phone);
    console.log("message:" + Message);

    var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
            user: 'motiur.mbstu@gmail.com', // Your email id
            pass: 'ugtsqqbrdyabdvpg' // Your password
        }
    });


    var mailOptions = {
        from: Email, // sender address
        to: 'motiur.mbstu@gmail.com', // list of receivers
        subject: Name, // Subject line
        text: Message //, // plaintext body
            // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

    if (validator.validate(Email)) {
        transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.log(error);
                res.json("Please try again");
            } else {
                console.log('Message sent: ' + info.response);
                res.json("Message has been send successfully");

                //res.redirect("/contact");

            };
        });


    } else {
        res.json("Please try again with valid email");
    }

});


// router.get('/download_CV', function(req, res) {

//     var filePath = __dirname + '/cvFile/Resume_Of_Motiur.pdf';
//     var filePathor = '/Resume_Of_Motiur.pdf';

//     var fileName = path.basename(filePath);

//     console.log("BaseName:" + fileName);
//     console.log("FilePath:" + filePath);

//     res.download(filePathor, "Resume_Of_Motiur.pdf", function(err) {

//         res.set("Content-Disposition', 'attachment; filename=Resume_Of_Motiur.pdf");
//         res.set('Content-type', 'application/pdf');

//         if (err) {
//             // Handle error, but keep in mind the response may be partially-sent
//             // so check res.headersSent
//             console.log(err);
//             res.redirect('/');


//         } else {
//             console.log("Success");
//             res.redirect('/');
//         }
//     }); // Set disposition and send it.
// });

module.exports = router;
