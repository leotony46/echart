/******************
 * Node.js 文件系统
 ******************/
/**
 * Node.js 提供一组类似 UNIX（POSIX）标准的文件操作API。 Node 导入文件系统模块(fs)语法如下所示：
 *  var fs = require("fs")
 */

//  *异步和同步* //
/**
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
/* jshint esversion: 6 */
import { readFile, readFileSync } from "fs";

// 异步读取
readFile('input1.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取：" + data.toString());
});

// 同步读取
var data = readFileSync('input1.txt');
console.log("同步读取：" + data.toString());

console.log("程序执行完毕。");