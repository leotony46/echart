var express = require('express');
var app = express();
var fs = require('fs');

app.get('/:id', function(req, res){
    // 首先我们读取已存在的用户
    fs.readFile(__dirname + '/' + 'users.json','uft8', function(err, data){
        data = JSON.parse(data);
        var user = data['user' + req.params.id];
        console.log(user);
        res.end(JSON.stringify(user));
    });
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("通过id显示用户详情应用实例，访问地址为 http://%s:%", host, port);
});