// require 方法有两个作用：
//    1. 加载文件模块并执行里面的代码
//    2. 拿到被加载文件模块导出的接口对象
//
//    在每个文件模块中都提供了一个对象：exports
//    exports 默认是一个空对象
//    你要做的就是把所有需要被外部访问的成员挂载到这个 exports 对象中
var eExports = require('./e')
var fs = require('fs')

console.log(eExports.foo)

console.log(eExports.add(10, 30))

console.log(eExports.age)

eExports.readFile('./d.js')

fs.readFile('./d.js', function (err, data) {
    console.log('使用d.js读取文件')
    if (err) {
        console.log('使用d.js读取文件失败')
    } else {
        console.log('>>>>>>>>>>>>>>>文件内容>>>>>>>>>>>>>：\n' + data.toString())
    }
})
