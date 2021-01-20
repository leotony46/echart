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
    console.log("【实例一】异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input1.txt');
console.log("【实例一】同步读取: " + data.toString());

console.log("【实例一】程序执行完毕。");

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
console.log("【实例二】准备打开文件！");
fs.open('input1.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("【实例二】文件打开成功！");     
});

/**
 * 获取文件信息
 */

/*
语法
以下为通过异步模式获取文件信息的语法格式：
    fs.stat(path, callback)
参数
参数使用说明如下：
path - 文件路径。
callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
fs.stat(path)执行后，会将stats类的实例返回给其回调函数。可以通过stats类中的提供方法判断文件的相关属性。例如判断是否为文件：

    var fs = require('fs');
    fs.stat('/Users/liuht/code/itbilu/demo/fs.js', function (err, stats) {
        console.log(stats.isFile());         //true
    })

stats类中的方法有：
方法	                    描述
stats.isFile()	            如果是文件返回 true，否则返回 false。
stats.isDirectory()	        如果是目录返回 true，否则返回 false。
stats.isBlockDevice()	    如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink()	    如果是软链接返回 true，否则返回 false。
stats.isFIFO()	            如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket()	        如果是 Socket 返回 true，否则返回 false。
*/

// 【实例三】
var fs = require("fs");

console.log("【实例三】准备打开文件！");
fs.stat('input1.txt', function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("【实例三】读取文件信息成功！");
    
    // 检测文件类型
    console.log("【实例三】是否为文件(isFile) ? " + stats.isFile());
    console.log("【实例三】是否为目录(isDirectory) ? " + stats.isDirectory());    
});

/*
以上代码执行结果如下：
    $ node file.js 
    准备打开文件！
    { dev: 16777220,
        mode: 33188,
        nlink: 1,
        uid: 501,
        gid: 20,
        rdev: 0,
        blksize: 4096,
        ino: 40333161,
        size: 61,
        blocks: 8,
        atime: Mon Sep 07 2015 17:43:55 GMT+0800 (CST),
        mtime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST),
        ctime: Mon Sep 07 2015 17:22:35 GMT+0800 (CST) }
    读取文件信息成功！
    是否为文件(isFile) ? true
    是否为目录(isDirectory) ? false
*/

/**
 * 写入文件
 */

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

/*
读取文件
语法
以下为异步模式下读取文件的语法格式：
    fs.read(fd, buffer, offset, length, position, callback)
该方法使用了文件描述符来读取文件。
参数
参数使用说明如下：
    fd - 通过 fs.open() 方法返回的文件描述符。
    buffer - 数据写入的缓冲区。
    offset - 缓冲区写入的写入偏移量。
    length - 要从文件中读取的字节数。
    position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。
    callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。
*/

// 【实例五】
var fs = require("fs");
var buf = new Buffer.alloc(1024);

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function(err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
        if (err){
            console.log(err);
        }
        console.log(bytes + "  字节被读取");
        
        // 仅输出读取的字节
        if(bytes > 0){
            console.log(buf.slice(0, bytes).toString());
        }
    });
});