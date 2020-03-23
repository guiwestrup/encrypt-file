var express = require('express');
const fs = require('fs');
var path = require('path');

var router = express.Router();
const encrypt = require('../functions/encrypt.js');

router.post('/', function (req, res) {
    console.log(req.body.uploadFile);
    
    const pathFile = path.join(__dirname, "../storage/upload/temp.txt");
    fs.writeFile(pathFile, req.body.uploadFile, function(err) {
        if (err) throw err;
        console.log("The file was saved!");
        fs.readFile(pathFile, { encondig: 'utf8' }, function(err, data) {
            if (err) throw err;
            console.log(data);
            console.log("OK: ");
            console.log(encrypt.decrypt(data.toString()));
        });
    });
});

module.exports = router;
