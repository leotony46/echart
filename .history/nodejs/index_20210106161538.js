// 扩展 index.js，使得路由函数可以被注入到服务器中：
var server = require("./server2");
var route = require("./router");

server.start = start;