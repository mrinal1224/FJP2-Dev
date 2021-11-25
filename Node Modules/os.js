const os = require('os') // This module is used to get details about an OS of the machine

console.log(os.arch()) // tells about the system Architecture (32 or 64 bit)

console.log(os.platform()) // tells about the Platform

console.log(os.networkInterfaces()) /// gives details about the Network you are in

console.log(os.cpus()) // gives details about the CPU