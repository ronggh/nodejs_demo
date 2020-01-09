var fs = require('fs')
// 第一个参数：文件路径
// 第二个参数：文件内容
// 第三个参数：回调函数
//    error
//
//    成功：
//      文件写入成功
//      error 是 null
//    失败：
//      文件写入失败
//      error 就是错误对象
var content = '大家好，我是Node.js'
fs.writeFile('../data/readme.txt',content,function (error) {
    if (error) {
        console.log('写入失败')
    } else {
        console.log('写入成功了')
    }
})