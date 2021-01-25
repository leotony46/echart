var express = require('express');
var app = express();
var fs = require('fs');

var id = 2;

app.get('/deletUser', function(req, res){
    // First read existing users.
    fs.readFile(__dirname + '/' + 'users.json', 'utf8', function(err, data){
        data = JSON.parse(data);
        delete data['user' + id];
        
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

var server = app.listen(8081, function(){
    var host = server.address().address;
    var post = server.address().port;
    console.log("通过id删除用户应用实例，访问地址为http://%s:%s", host, port);
});