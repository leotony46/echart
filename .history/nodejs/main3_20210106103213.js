// Node 应用程序是如何工作的？
var fs = require('fs');

fs.readFile('input.txt', function(err, data){
    if (err) {
        // 通过删除 input.txt 或更改 input.txt 名字， 可以测试错误信息
        console.log(err.stack);
        return;
    }
    console.log(data.toString());
});
console.log("程序执行完毕。");