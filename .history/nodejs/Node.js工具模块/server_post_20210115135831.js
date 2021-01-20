var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 创建application/x-www-form-urlencoded编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var urlencodedParser = app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
var public = app.use(bodyParser.json()); // support json encoded bodies

app.use('/public', express.static('public'));

app.get('/index_post.html', function(req, res){
    res.sendFile(__dirname + "/" + "index_post.html");
});

app.post('/process_post', urlencodedParser, function(req, res){
    // 输出 JSON 格式
    var response = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

app.post('/process_post', function(req, res){
    // 输出 JSON 格式
    var response = {
        "first_name": req.query.first_name,
        "last_name": req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});