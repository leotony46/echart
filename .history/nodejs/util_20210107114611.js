// Node.js 常用工具
/**
 * util 是一个 Node.js核心模块，提供常用函数的集合，用于弥补核心JavaScript的功能过于精简的不足。
 *  使用方法如下：
 *      const util = require('util');
 */

//  Util.callbackify
/**
 * util.callbackify(original) 将 async 异步函数（或者一个返回值为 Promise 的函数）
 * 转换成遵循异常优先的回调风格的函数，例如将 (err, value) => ... 回调作为最后一个参数。 
 * 在回调函数中，第一个参数为拒绝的原因（如果 Promise 解决，则为 null），第二个参数则是解决的值。
 */

//  实例一
const util = require('util');

async function fn() {
    return 'hello world';
}

const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
    if (err) throw err;
    console.log(ret);
});
