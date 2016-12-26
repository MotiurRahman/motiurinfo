var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});


router.get('/download', function(req, res,next) {
    var file = '/cvFile/Resume_Of_Motiur.pdf';
    console.log("File:" + file);
 
    res.download("/Resume_Of_Motiur.pdf", 'Resume_Of_Motiur.pdf', function(err) {
        if (err) {
            // Handle error, but keep in mind the response may be partially-sent
            // so check res.headersSent
             console.log("Failed");
             res.redirect('/');
             
             
        } else {
        	 console.log("Success");
            res.redirect('/');
        }
    }); // Set disposition and send it.
});

module.exports = router;
