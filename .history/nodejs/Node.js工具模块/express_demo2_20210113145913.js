// express_demo2 文件代码
var express = require('express');
var app = express();

// 主页输出 "Hello World"
app.get('/', function(req, res){
    console.log("主页 GET 请求");
    res.send('Hello GET');
});

// POST 请求
app.post('/', function(req, res){
    console.log("主页 POST 请求");
    req.send('Hello POST');
});

// /del_user 页面响应
app.get('/del_user', function(req, res){
    console.log("/del_user 响应 DELETE 请求");
    res.send('删除页面');
});

// /list_user 页面 GET 请求
app.get('/list_user', function(req, res){
    console.log("/list_user GET 请求")；
    res.send('用户列表页面');
});
