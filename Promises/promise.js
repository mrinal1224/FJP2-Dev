const fs = require("fs");

console.log("before");

// fs.readFile('f1.txt' , function(err , data){
//        if(err){
//               console.log(err)
//        }
//        console.log('File Data-> '+ data)
// })

let promise = fs.promises.readFile("f1.txt");

console.log(promise);

promise.then(function (data) {
  console.log("File 1 data - >" + data);
}); /// Fullfilled

promise.catch(function (err) {
  console.log("Error -> " + err);
}); // Rejected or unfullfilled

console.log("After");
