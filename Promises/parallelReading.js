const fs = require('fs')



// Synchronous way or reading a file
// let data = fs.readFileSync('f1.txt')

// console.log('File data->  ' + data)


console.log('before')

fs.readFile('f1.txt' , cb)

fs.readFile('f2.txt' , cb2)



function cb(err , data){
       if(err){
              console.log(err)
       }
       else{
              console.log('File data - >' + data)
       }

       
}


function cb2(err , data){
       if(err){
              console.log(err)
       }
       else{
              console.log('File data - >' + data)
       }
}

console.log('after')