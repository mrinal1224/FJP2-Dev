const fs = require("fs");
const path = require("path");


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
      //destpath ->//D:\FJP2 Dev\test folder\organized_files // I want to create the folder in this path
      if (fs.existsSync(destPath) == false) {
        fs.mkdirSync(destPath); // we will only creata a directory if it does not exist
      } else {
        console.log("The Folder Already Exists");
      }
    } else {
      console.log("Please enter a valid Path");
    }
  }
  organizeHelper(dirpath, destPath);
}
// we wrote this organizeHelper to categorize the files
function organizeHelper(src, dest) {
  let childNames = fs.readdirSync(src); // get all the files and folders in that dirctory
  //console.log(childNames)

  for (let i = 0; i < childNames.length; i++) {
    let childAddress = path.join(src, childNames[i]); // path is identified for the file
    let isFile = fs.lstatSync(childAddress).isFile(); // we check here to identify files

    if (isFile == true) {
      let fileCategory = getCategory(childNames[i]);
      console.log(childNames[i] + "  belongs to  " + fileCategory);

      sendFiles(childAddress, dest, fileCategory);
    }
  }
}

function getCategory(name) {
  let ext = path.extname(name); // we will take out the extension of the files here
  //console.log(ext)
  ext = ext.slice(1);
  //console.log(ext)

  for (let type in types) {
    let cTypeArr = types[type];
    //console.log(cTypeArr)

    for (let i = 0; i < cTypeArr.length; i++) {
      if (ext == cTypeArr[i]) {
        // we matched the extension
        return type; // we rerturned typs of the file
      }
    }
  }

  return "others";
}

function sendFiles(srcFilePath, dest, fileCategory) {
  let catPath = path.join(dest, fileCategory);

  //D:\FJP2 Dev\test folder\organized_files\media
  //D:\FJP2 Dev\test folder\organized_files\documents
  //D:\FJP2 Dev\test folder\organized_files\app
  //D:\FJP2 Dev\test folder\organized_files\archives

  if (fs.existsSync(catPath) == false) {
    fs.mkdirSync(catPath);
  }

  let fileName = path.basename(srcFilePath);
  let destFilePath = path.join(catPath, fileName);

  //D:\FJP2 Dev\test folder\organized_files\media\test.mp4

  fs.copyFileSync(srcFilePath, destFilePath); // copyFileSync is used to copy files from source to dest
  fs.unlinkSync(srcFilePath); // unlinkSync is used to remove files from a path

  console.log(fileName + " copied to " + fileCategory);
}


module.exports= {
       organizeKey : organizeFn
}