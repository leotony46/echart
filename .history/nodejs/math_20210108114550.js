// math.js
/* jslint esversion: 6 */
var num = 0;
function add(a, b) {
    return a + b;
}
module.exports = {
    // 需要向外暴露的变量、函数
    num: num,
    add: add 
};

//引入自定义的模块时，参数包含路径，可省略.js
//引入核心模块时，不需要带路径，如var http = require("http");
var math = require('./math');
math.add(1, 2); //3

console.log("num：" + num);
console.log("add: " + add);