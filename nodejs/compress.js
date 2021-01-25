/*
链式流
链式是通过连接输出流到另外一个流并创建多个流操作链的机制。
链式流一般用于管道操作。
接下来我们用管道和链式来压缩和解压文件。
*/
// 创建 compress.js 文件用于压缩文件, 代码如下：
var fs = require("fs");
var zlib = require('zlib');

// 压缩 input.txt 文件为 input.txt.gz
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));

console.log("文件压缩完成。");