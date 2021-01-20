/*
EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件。接下来我们来具体看下 EventEmitter 的属性介绍。

方法
序号	方法 & 描述
1	addListener(event, listener)
    为指定事件添加一个监听器到监听器数组的尾部。
2	on(event, listener)
    为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。
        server.on('connection', function (stream) {
            console.log('someone connected!');
        });
3	once(event, listener)
    为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
        server.once('connection', function (stream) {
        console.log('Ah, we have our first user!');
        });
4	removeListener(event, listener)
    移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
    它接受两个参数，第一个是事件名称，第二个是回调函数名称。
        var callback = function(stream) {
            console.log('someone connected!');
        };
        server.on('connection', callback);
        // ...
        server.removeListener('connection', callback);
5	removeAllListeners([event])
    移除所有事件的所有监听器， 如果指定事件，则移除指定事件的所有监听器。
6	setMaxListeners(n)
    默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
7	listeners(event)
    返回指定事件的监听器数组。
8	emit(event, [arg1], [arg2], [...])
    按监听器的顺序执行执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

类方法
序号	方法 & 描述
1	listenerCount(emitter, event)
    返回指定事件的监听器数量。
    events.EventEmitter.listenerCount(emitter, eventName) //已废弃，不推荐
    events.emitter.listenerCount(eventName) //推荐

事件
序号	事件 & 描述
1	newListener
        event - 字符串，事件名称
        listener - 处理事件函数
该事件在添加新监听器时被触发。
2	removeListener
        event - 字符串，事件名称
        listener - 处理事件函数
从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。

实例
以下实例通过 connection（连接）事件演示了 EventEmitter 类的应用。
*/

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听 #1
var listener1 = function listener1() {
    console.log('监听 listener1 执行。');
};

// 监听 #2
var listener2 = function listener2() {
    console.log('监听 listener2 执行。');
};

// 绑定 connection 事件，处理函数为 listener1
eventEmitter.addListener('connection', listener1);
// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件
eventEmitter.emit('connection');

// 移除监听绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + " 个监听器监听连接事件。");

