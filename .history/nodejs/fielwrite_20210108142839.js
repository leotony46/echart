/*
写入文件
语法
以下为异步模式下写入文件的语法格式：
    fs.writeFile(file, data[, options], callback)
writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
参数
参数使用说明如下：
    file - 文件名或文件描述符。
    data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
    options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
    callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。
*/

// 【实例四】
var fs = require("fs");

console.log("准备写入文件");
fs.writeFile('output2.txt', '我是通 过fs.writeFile 写入文件的内容',  function(err) {
    if (err) {
        return console.error(err);
    }
    console.log("【实例四】数据写入成功！");
    console.log("【实例四】--------我是分割线-------------");
    console.log("【实例四】读取写入的数据！");
    fs.readFile('output2.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("【实例四】异步读取文件数据: " + data.toString());
    });
});