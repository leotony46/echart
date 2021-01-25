/*
Node.js 全局对象
JavaScript 中有一个特殊的对象，称为全局对象（Global Object），它及其所有属性都可以在程序的任何地方访问，即全局变量。
在浏览器 JavaScript 中，通常 window 是全局对象， 而 Node.js 中的全局对象是 global，所有全局变量（除了 global 本身以外）都是 global 对象的属性。
在 Node.js 我们可以直接访问到 global 的属性，而不需要在应用中包含它。

全局对象与全局变量
global 最根本的作用是作为全局变量的宿主。按照 ECMAScript 的定义，满足以下条 件的变量是全局变量：
    在最外层定义的变量；
    全局对象的属性；
    隐式定义的变量（未定义直接赋值的变量）。
当你定义一个全局变量时，这个变量同时也会成为全局对象的属性，反之亦然。需要注 意的是，在 Node.js 中你不可能在最外层定义变量，因为所有用户代码都是属于当前模块的， 而模块本身不是最外层上下文。
注意： 最好不要使用 var 定义变量以避免引入全局变量，因为全局变量会污染命名空间，提高代码的耦合风险。
*/

// __filename
/**
 * __filename 表示当前正在执行的脚本的文件名。它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
 */
// 实例一
console.log("实例一 结果");
console.log(__filename);

// __dirname
/**
 * __dirname 表示当前执行脚本所在的目录。
 */
// 实例二
console.log("实例二 结果");
console.log(__dirname);

// setTimeout(cb, ms)
/**
 * setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
 * 返回一个代表定时器的句柄值。 
 */
// 实例三
function printHello() {
    console.log("实例三 结果");
    console.log("Hello, World!");
}
// 两秒钟后执行以上函数
setTimeout(printHello, 2000);

// clearTimeout(t)
/**
 * clearTimeout( t ) 全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器
 */
// 实例四
function printHello(){
    console.log("实例四 结果");
    console.log( "Hello, World!");
}
// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);

// 清除定时器
clearTimeout(t);

// setInterval(cb, ms)
/**
 * setInterval(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
 * 返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
 * setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关闭。
 */
// 实例五
function printHello(){
    console.log("实例五 结果");
    console.log( "Hello, World!");
}
setInterval(printHello, 2000);

/**
 * console
 * console 用于提供控制台标准输出，它是由 Internet Explorer 的 JScript 引擎提供的调试工具，后来逐渐成为浏览器的实施标准。
 * Node.js 沿用了这个标准，提供与习惯行为一致的 console 对象，用于向标准输出流（stdout）或标准错误流（stderr）输出字符。
 */

/*
console 方法
以下为 console 对象的方法:

序号	方法 & 描述
1	console.log([data][, ...])
    向标准输出流打印字符并以换行符结束。该方法接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。
2	console.info([data][, ...])
    该命令的作用是返回信息性消息，这个命令与console.log差别并不大，除了在chrome中只会输出文字外，其余的会显示一个蓝色的惊叹号。
3	console.error([data][, ...])
    输出错误消息的。控制台在出现错误时会显示是红色的叉子。
4	console.warn([data][, ...])
    输出警告消息。控制台出现有黄色的惊叹号。
5	console.dir(obj[, options])
    用来对一个对象进行检查（inspect），并以易于阅读和打印的格式显示。
6	console.time(label)
    输出时间，表示计时开始。
7	console.timeEnd(label)
    结束时间，表示计时结束。
8	console.trace(message[, ...])
    当前执行的代码在堆栈中的调用路径，这个测试函数运行很有帮助，只要给想测试的函数里面加入 console.trace 就行了。
9	console.assert(value[, message][, ...])
    用于判断某个表达式或变量是否为真，接收两个参数，第一个参数是表达式，第二个参数是字符串。只有当第一个参数为false，才会输出第二个参数，否则不会有任何结果。

console.log()：向标准输出流打印字符并以换行符结束。
console.log 接收若干 个参数，如果只有一个参数，则输出这个参数的字符串形式。如果有多个参数，则 以类似于C 语言 printf() 命令的格式输出。

第一个参数是一个字符串，如果没有 参数，只打印一个换行。
    console.log('Hello world'); 
    console.log('byvoid%diovyb'); 
    console.log('byvoid%diovyb', 1991); 
运行结果为：
    Hello world 
    byvoid%diovyb 
    byvoid1991iovyb 

console.error()：与console.log() 用法相同，只是向标准错误流输出。
console.trace()：向标准错误流输出当前的调用栈。
console.trace();

运行结果为：
    Trace: 
    at Object.<anonymous> (/home/byvoid/consoletrace.js:1:71) 
    at Module._compile (module.js:441:26) 
    at Object..js (module.js:459:10) 
    at Module.load (module.js:348:31) 
    at Function._load (module.js:308:12) 
    at Array.0 (module.js:479:10) 
    at EventEmitter._tickCallback (node.js:192:40)
*/