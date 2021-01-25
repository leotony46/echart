// util.inherits
/*
util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
JavaScript 的面向对象特性是基于原型的，与常见的基于类的不同。JavaScript 没有提供对象继承的语言级别特性，而是通过原型复制来实现的。
*/

// 示例
var util = require('util'); 
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 

/*
我们定义了一个基础对象 Base 和一个继承自 Base 的 Sub，Base 有三个在构造函数内定义的属性和一个原型
中定义的函数，通过util.inherits 实现继承。运行结果如下：

    base 
    Hello base 
    { name: 'base', base: 1991, sayHello: [Function] } 
    sub 
    { name: 'sub' }

注意：Sub 仅仅继承了Base 在原型中定义的函数，而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
同时，在原型中定义的属性不会被 console.log 作 为对象的属性输出。如果我们去掉 objSub.sayHello(); 这行的注释，将会看到：

    node.js:201 
    throw e; // process.nextTick error, or 'error' event on first tick 
    ^ 
    TypeError: Object #&lt;Sub&gt; has no method 'sayHello' 
    at Object.&lt;anonymous&gt; (/home/byvoid/utilinherits.js:29:8) 
    at Module._compile (module.js:441:26) 
    at Object..js (module.js:459:10) 
    at Module.load (module.js:348:31) 
    at Function._load (module.js:308:12) 
    at Array.0 (module.js:479:10) 
    at EventEmitter._tickCallback (node.js:192:40) 
    
*/
