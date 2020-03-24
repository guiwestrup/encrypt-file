var express = require('express');
const fs = require('fs');
var path = require('path');

var router = express.Router();
const encrypt = require('../functions/encrypt.js');

router.post('/', function (req, res) {

    let messageEncrypt = encrypt.encrypt(Buffer.from(req.body.message));
    const pathFile = path.join(__dirname, "../storage/" + req.body.fileName + ".txt");
    fs.writeFile(pathFile, messageEncrypt, function(err) {
        if (err) throw err;
        console.log("The file was saved!");
        res.send("Arquivo salvo com sucesso <a href='/'>Voltar</a> </br> <p>Caminho para seu arquivo: " + pathFile + " </p>");
    });
});

module.exports = router;
