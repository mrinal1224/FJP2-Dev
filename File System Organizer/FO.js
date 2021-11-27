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
    treeFn();
    break;
  case "organize":
    organizeFn(inputArr[1]);
    break;
  case "help":
    helpFn();
    break;
  default:
    console.log("PLEASE ENTER A VALID COMMAND");
    break;
}

function treeFn() {
  console.log("Tree Function Implemented");
}

function organizeFn(dirpath) {
  // 1.input of a directory path
  let destPath;

  if (dirpath == undefined) {
    console.log("PLease enter a Directory Path");
    return;
  } else {
    let doesExist = fs.existsSync(dirpath);
    //console.log(doesExist) // it returns true or false for the directory

    if (doesExist == true) {
      //2 . create a Organized files Directory
      destPath = path.join(dirpath, "organized_files");
      //dirpath ->//D:\FJP2 Dev\test folder\organized_files
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); // we will only creata a directory if it does not exist
      } else {
        console.log("The Folder Already Exists");
      }
    } else {
      console.log("Please enter a valid Path");
    }
  }
  organizeHelper(dirpath);
}

function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src);
  //console.log(childNames)

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]);
    let isFile = fs.lstatSync(childAddress).isFile();

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + "  belongs to  " + fileCategory);
    }
  }
}

function getCategory(name) {
  let ext = path.extname(name);
  //console.log(ext)
  ext = ext.slice(1);
  //console.log(ext)

  for (let type in types) {
    let cTypeArr = types[type];
    //console.log(cTypeArr)

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        return type;
      }
    }
  }
}

function helpFn() {
  console.log(`List of all the commands -
                 1)Tree Command - node FO.js tree <dirName>
                 2) Organize- node FO.js organize <dirName
                 3) Help - node FO.js help `);
}

//D:\FJP2 Dev\test folder

//D:\FJP2 Dev\test folder\organized_files -> New Folder Path
