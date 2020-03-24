var express = require('express');
const fs = require('fs');
var path = require('path');

var router = express.Router();
const encrypt = require('../functions/encrypt.js');

router.post('/', function (req, res) {
    console.log(req.files.uploadFile);
    
    const pathFile = path.join(__dirname, "../storage/upload/temp.txt");
    fs.writeFile(pathFile, req.files.uploadFile.data, function(err) {
        if (err) throw err;
        console.log("The file was saved!");
        fs.readFile(pathFile, { encondig: 'utf8' }, function(err, data) {
            if (err) throw err;
            console.log(data.toString());
            console.log("OK: ");
            let message = encrypt.decrypt(data.toString());
            console.log(message);
        });
    });
});

module.exports = router;
