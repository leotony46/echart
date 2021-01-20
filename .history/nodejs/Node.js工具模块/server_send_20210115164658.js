var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index_send.html', function(req, res){
    res.sendFile( __dirname + "/" + "index.html");
});

