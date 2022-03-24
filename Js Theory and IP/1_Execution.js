// Here we will talk about Execution Context


// Execution Context - The Environment where JavaScript code is Executed and Evaluated

// global Execution Context - By default a Execution context is Provided by JS before it starts to execute
//any code

var a = 2
var b = 3

function add(m , n){
       var sum = m+n
       return sum
}

var sum1 = add(1,2)

var sum2 = add(a , b)