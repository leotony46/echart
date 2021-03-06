
/* 
EventEmitter 类
events 模块只提供了一个对象： events.EventEmitter。
EventEmitter 的核心就是事件触发与事件监听器功能的封装。
你可以通过require("events");来访问该模块。
    // 引入 events 模块
    var events = require('events');
    // 创建 eventEmitter 对象
    var eventEmitter = new events.EventEmitter();
*/
/* 
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。
当添加新的监听器时，newListener 事件会触发，
当监听器被移除时，removeListener 事件被触发。
*/
// event.js 文件 -- EventEmitter 的用法：
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function(){
    console.log("some_event 事件触发。");
});
setTimeout(function(){
    event.emit('some_event');
},1000);
