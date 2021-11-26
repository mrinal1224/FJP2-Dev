const path = require('path')


let ext = path.extname('D:\\FJP2 Dev\\Node Modules\\f1.txt')
//extname is a function that will get the extension from the path of a file
console.log('Extention of the file -> ', ext)

let basename = path.basename('D:\\FJP2 Dev\\Node Modules\\f1.txt')
//basename is a function that will get the actual name of the file or a folder from it's path
console.log('basename of the file -> ',basename)

console.log(__dirname) // gets you the path of the current Directory you are in
console.log(__filename)// gets you the path of the current file you are in 