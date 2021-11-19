//variable declartion with let var and const

// var a;//first the variable is initialized with undefined
// console.log(a)
// a = 20
// console.log(a)
// a = 'Hello'// Dynamic Behaviour of JavaScript
// a = null
// a = true
// console.log(a)
//JavaScript is a Synchronus Language and a single threaded language


// let and const 

// first Problem with var - Redecalration

// var b = 2
// console.log(b)
// var b = 'I am a string'
// console.log(b)

// var keyword allows us to redeclare a variable

// let b = 2
// console.log(b)
// let b = 'I am a string'
// console.log(b)

// let keyword does not allows us to redeclare a variable



// loops and if else

// let flag = true
// var num = 13

// for(let i = 2 ; i*i<=num ; i++){
//        if(num%i==0){
//               flag = false
//               break
//        }

// }

// if(flag){
//        console.log(num ,'is Prime')
// }
// else{
//        console.log('The number is not Prime')
// }


//2nd Problem with var- scoping - function scoping and block scoping

// if(10%2==0){
//     var c = 2
//     console.log(c)   
// }

// console.log(c)

//var is function scoped



// if(10%2==0){
//        let c = 2
//        console.log(c)   
//    }
   
//    console.log(c)

//Let is blocked scope

//let

// let a = 2
// let a = 3 // not allowed redcalring



// let a = 2
// a = 3 // allowed re assinging

//const a=2
//console.log(a)



//--xx--Environment , variables(let , var and const), loops , if else , problems with var --xx--


//Strings and string methods--

let str = 'pepcoders'
console.log(str)

// string Methods-
// .length
//console.log(str.length)

//extracting a part of string - slice , substr
//slice(start , end) - returns sliced array from starting index to ending-1
// let slicedStr = str.slice(3 ,7) // last index is excluded
// console.log(slicedStr)

//substr method
//substr(start , length) - staring and the length of the word
// let subString = str.substr(3 , 4 )
// console.log(subString)


// //replace method - expects the word to be replaced as first argument and the replacemnetg as
//  second argument 

// let sayHello = 'Hello Mukesh'
// console.log(sayHello) // hello Mukesh

// let sayBye = sayHello.replace('Hello' , 'bye')
// console.log(sayBye) // Bye Mukesh

// toUppercase  and toLowerCase

// let text1 = 'Hello World'
// let text2 = text1.toUpperCase()
// console.log(text2)

// let text1 = 'Hello World'
// let text2 = text1.toLowerCase()
// console.log(text2)


//concatenation method

// let firstStr = 'Hello'
// let secondStr = 'World'

// let concatenatedStr = firstStr.concat(' ' ,secondStr)
// console.log(concatenatedStr)

// Trim Method

// let text = '   Hello World      '
// console.log(text)
// let trimmedText = text.trim()

// console.log(trimmedText)








