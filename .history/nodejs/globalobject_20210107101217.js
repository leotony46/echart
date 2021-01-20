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

//  实例二
console.log("实例二 结果");
console.log(__dirname);

// setTimeout(cb, ms)
/**
 * setTimeout(cb, ms) 全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。
 * 返回一个代表定时器的句柄值。 
 */

//  实例三
function printHello() {
    console.log("Hello, World!");
}
// 两秒钟后执行以上函数
setTimeout(printHello, 2000);