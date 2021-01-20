/*
给 onRequest() 函数加上一些逻辑，用来找出浏览器请求的 URL 路径：
*/

var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;

/*
我们的应用可以通过请求的 URL 路径来区别不同请求了--这使我们得以使用路由（还未完成）
来将请求以 URL 路径为基准映射到处理程序上。
在我们所要构建的应用中，这意味着来自 /start 和 /upload 的请求可以使用不同的
代码来处理。稍后我们将看到这些内容是如何整合到一起的。
现在我们可以来编写路由了，建立一个名为 router.js 的文件，添加以下内容：

router.js 文件代码：
    function route(pathname) {
        console.log("About to route a request for " + pathname);
    }
    exports.route = route;

如你所见，这段代码什么也没干，不过对于现在来说这是应该的。
在添加更多的逻辑以前，我们先来看看如何把路由和服务器整合起来。
我们的服务器应当知道路由的存在并加以有效利用。
我们当然可以通过硬编码的方式将这一依赖项绑定到服务器上，
但是其它语言的编程经验告诉我们这会是一件非常痛苦的事，
因此我们将使用依赖注入的方式较松散地添加路由模块。
*/

// 首先，我们来扩展一下服务器的 start() 函数，以便将路由函数作为参数传递过去
// 重新写一个server2.js
// 同时，我们会相应扩展 index.js，使得路由函数可以被注入到服务器中