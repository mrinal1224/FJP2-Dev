// Node Modules are used to perform different tasks as required

//File System Module-

// ***files****//
//1. we will be reading, writing , updating , deleting files from our script

const fs = require('fs')
const path = require('path') // 

// let content = fs.readFileSync('f1.txt') // readFileSync is a method top read a file
// console.log('This is F1 data-> '+ content)

// // writing to a file 
// //writeFileSync method is used to put data(write) to a file
// //if the file passed doent exist it creates 
//a new file and writes to it
// fs.writeFileSync('f2.txt' , 'Hello from F2')



// // append a file
// // append file sync adds data to the previously written file
// // basically it appnends a file with new data passed
// fs.appendFileSync('f2.txt' , ' this is F2 data')


// //delete a file by passing it's path
// //unlinkSync

// fs.unlinkSync('f2.txt')
// console.log('File Removed')





//* Directories *//

// create
// mkdirSync is used to create a new directory
//fs.mkdirSync('myDirectory')

//delete
//rmdirSync is used to remove or delete a directory
//fs.rmdirSync('myDirectory')

// to check whether a directory exists or not we can us existsSync method
// if the directory exists the method returns true otherwise false
// let doesExist = fs.existsSync('myDirectory')
// console.log(doesExist)


// //stats of a path (details of a folder)
// // lstatsync provides us with all the statistics of a directory

// let statsofPath = fs.lstatSync('myDirectory')
// console.log(statsofPath)

// console.log('isFile?' ,statsofPath.isFile()) 
// // isFile is a metnod that checks wheter a passed path is a file or not
// console.log('isDirectory' , statsofPath.isDirectory()) 
// // isDirectory that checks wheter a passed path is a directory or not

// readdirSync method is used to check the content of a particular directory
// let folderPath = 'D:\\FJP2 Dev\\Node Modules\\myDirectory'
// let folderContent = fs.readdirSync(folderPath)
// console.log('directory content '+ folderContent)



//copy files

// src file , destFolder

let srcFilePath = 'D:\\FJP2 Dev\\Node Modules\\myDirectory\\f3.txt'
let destFolder = 'D:\\FJP2 Dev\\Node Modules\\myDirectory2\\'

let tobecopiedFileName = path.basename(srcFilePath)
console.log(tobecopiedFileName) // f3.txt
// basename method gets the actual name of the file or directory

let destPath = path.join(destFolder , tobecopiedFileName)
console.log(destPath)

fs.copyFileSync(srcFilePath , destPath)
console.log("file Copied")










