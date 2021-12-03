//1. First Activity with Node.js

// We will be creating a File System Organizer//
//Features of the Project -
//If you have numerous Files in a folder and they are not Properly arranged
//So you can use this tool to arrange them in specific directory according to their extension
// like text files will go into text File Folder .exe files will go into application folder and so on
// so at the end you will have a arranged set of files in specific folders

// we will be using built in node modules like fs and path to  create this project

// array ke from mein input jaata hai command line pein

//let input = process.argv[2]
//console.log(input)
// node js treats command line inputs as array and that array is your process array

const fs = require("fs");
const path = require("path");
const heplObj = require('./commands/help') // imported help script
const treeObj = require('./commands/tree')
const organizeObj = require('./commands/organize')

let inputArr = process.argv.slice(2); // slice is used to extart the commands and path we have passed
//console.log(inputArr)

let command = inputArr[0]; // organzie , help . tree , default

let types = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
};

switch (command) {
  case "tree":
    treeObj.treeKey(inputArr[1]);
    break;
  case "organize":
    organizeObj.organizeKey(inputArr[1]); // you are passing a directory Path
    break;
  case "help":
    heplObj.helpFnKey()
    break;
  default:
    console.log("PLEASE ENTER A VALID COMMAND");
    break;
}
