/*
创建 hello.js 文件，代码如下：
    exports.world = function() {
        console.log('Hello World');
    }
在以上示例中，hello.js 通过 exports 对象把 world 作为模块的访问接口，
在 main.js 中通过 require('./hello') 加载这个模块，然后就可以直接访
问 hello.js 中 exports 对象的成员函数了。

有时候我们只是想把一个对象封装到模块中，格式如下：
    module.exports = function() {
    // ...
    }
*/

// hello.js
function Hello() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
}
module.exports = Hello;
