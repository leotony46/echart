// express_demo2 文件代码
var express = require('express');
var app = express();

// 主页输出 "Hello World"
app.get('/', function(req, res){
    console.log("主页 GET 请求");
    res.send('Hello GET');
})

