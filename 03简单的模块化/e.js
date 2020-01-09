var foo = 'eeee in e.js inport'

// console.log(exports)

exports.foo = 'hello in e.js export'

exports.add = function (x, y) {
    return x + y
}

exports.readFile = function (path, callback) {
    console.log('使用e中的函数读取文件，文件路径：', path)
}

var age = 18

exports.age = age

function add(x, y) {
    return x - y
}
