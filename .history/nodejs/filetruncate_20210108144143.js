/*
截取文件
语法
以下为异步模式下截取文件的语法格式：
    fs.ftruncate(fd, len, callback)
该方法使用了文件描述符来读取文件。
参数
参数使用说明如下：
    fd - 通过 fs.open() 方法返回的文件描述符。
    len - 文件内容截取的长度。
    callback - 回调函数，没有参数。
*/

// 【实例七】
