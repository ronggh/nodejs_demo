// 引入http核心模块
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000
// 创建 Server
const server = http.createServer()
// 监听 request 请求事件，设置请求处理函数
server.on('request', function (request, response) {
    //
    console.log('收到请求了，请求路径是：' + request.url)
    console.log('请求我的客户端的地址是：', request.socket.remoteAddress, request.socket.remotePort)

    //
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    //
    // 根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //    req.url 获取到的是端口号之后的那一部分路径
    //    也就是说所有的 url 都是以 / 开头的
    // 2. 判断路径处理响应
    var url = request.url

    if (url === '/') {
        response.end('index page')
    } else if (url === '/login') {
        response.end('login page')
    } else if (url === '/products') {
        var products = [{
            name: '苹果 X',
            price: 8888
        },
        {
            name: '菠萝 X',
            price: 5000
        },
        {
            name: '小辣椒 X',
            price: 1999
        }
        ]
        response.end(JSON.stringify(products))
    } else {
        response.end('404 Not Found.')
    }
})

// 绑定端口号，启动服务
// 需要开启ECMA6语法支持
// File > Settings > Languages & Frameworks > JavaScript,选择ECMAScript6
server.listen(port,hostname,() =>{
    console.log(`Server running at http://${hostname}:${port}/`);
})
