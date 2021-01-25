var express = require('express');
var app = express();

app.use('/public', express.static('public'));
app.get('/index_get.html', function(req, res){
    res.sendFile(__dirname + "/" + "index_get.html");
});

