// 1 篇笔记
/**
 * util.inherits() 可以继承原型方法（node 版本 V10.8.0）。
 */

let util = require('util');
function Base() {
    this.name = 'name';
    this.base = 1995;
    this.sayHello = function () {
        console.log('hello ' + this.name);
    };
}

Base.prototype.showName = function() {
    console.log(this.name);
};

function sub() {
    this.name = 'sub';
}

util.inherits(sub, Base);

let baseObj = new Base();
console.log(baseObj);
baseObj.showName();

let subObj = new sub();
console.log(subObj);
console.log(subObj.name);
subObj.showName();