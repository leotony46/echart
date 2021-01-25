/**
 * 异步和同步
 * /

/*
Node.js 文件系统（fs 模块）模块中的方法均有异步和同步版本，例如：
读取文件内容的函数有异步的 fs.readFile() 和同步的 fs.readFileSync()。
异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。
建议大家使用异步方法，比起同步，异步方法性能更高，速度更快，而且没有阻塞。
 */

//  【实例一】
/*
创建 input1.txt 文件，内容如下：
    菜鸟教程官网地址：www.runoob.com
    文件读取实例
*/
var fs = require("fs");

// 异步读取
fs.readFile('input1.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");

/**
 * 打开文件
 */

/*
语法
以下为在异步模式下打开文件的语法格式：
    fs.open(path, flags[, mode], callback)
参数
参数使用说明如下：
    path - 文件的路径。
    flags - 文件打开的行为。具体值详见下文。
    mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
    callback - 回调函数，带有两个参数如：callback(err, fd)。
flags 参数可以是以下值：
Flag	描述
    r	以读取模式打开文件。如果文件不存在抛出异常。
    r+	以读写模式打开文件。如果文件不存在抛出异常。
    rs	以同步的方式读取文件。
    rs+	以同步的方式读取和写入文件。
    w	以写入模式打开文件，如果文件不存在则创建。
    wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
    w+	以读写模式打开文件，如果文件不存在则创建。
    wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
    a	以追加模式打开文件，如果文件不存在则创建。
    ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
    a+	以读取追加模式打开文件，如果文件不存在则创建。
    ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。
*/

// 【实例二】
var fs = require("fs");

// 异步打开文件
console.log("准备打开文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");     
});
