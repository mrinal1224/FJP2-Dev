//
// function sayHi(){
//        console.log("hi")
// }


// sayHi()
// sayHi()
// sayHi()

// function add(a , b){
//       // console.log(a+b)
//       return a+b
// }

// let sum = add(4 ,3) // function call
// console.log('the sum is' , sum)


//In JavaScript functions are known as first class Citizens
// You can treat functions as variables in JavaScript

//This is also known as function Expression
// let sayHi = function(a){
//        console.log(a) 
// } // anonymous functions

// sayHi(2) // prints 2


// IIFE (Immediately invoked function expression)

let add = (function(a,b){
       return a+b
})(10 , 20)

console.log(add)