var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.use('/public', express.static('public'));

app.get('/index_post.html', function(req, res){
    res.sendFile(__dirname + "/" + "index_post");
});


