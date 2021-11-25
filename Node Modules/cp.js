 //child process is a node module used to create subprocess within a script to perform 
 // different tasks
 
 const cp =  require('child_process')

//  console.log('Trying to open Calculator')

//  cp.execSync('calc') // execSync is a child Process method used to execute files 

//  console.log('Calculator Opened')

//  console.log('Trying to open Vs Code')
//  cp.execSync('code')
//  console.log('Vs code Opened')


 //cp.execSync('start chrome https://www.pepcoding.com/')

 let output = cp.execSync('node test.js')
 console.log(''+ output) // you can concat with an empty string as well

 


