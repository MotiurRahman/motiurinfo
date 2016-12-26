var express = require('express');
var router = express.Router();
var mime = require('mime');
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/download_CV', function(req, res) {

    var filePath = __dirname + '/cvFile/Resume_Of_Motiur.pdf';
    var filePathor = '/Resume_Of_Motiur.pdf';

    var fileName = path.basename(filePath);

    console.log("BaseName:" + fileName);
    console.log("FilePath:" + filePath);

    res.download(filePathor, "Resume_Of_Motiur.pdf", function(err) {

        res.set("Content-Disposition', 'attachment; filename=Resume_Of_Motiur.pdf");
        res.set('Content-type', 'application/pdf');

        if (err) {
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
            console.log(err);
            res.redirect('/');


        } else {
            console.log("Success");
            res.redirect('/');
        }
    }); // Set disposition and send it.
});

module.exports = router;
