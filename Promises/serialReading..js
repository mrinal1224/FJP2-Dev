const fs = require("fs");

console.log("before");

fs.readFile("f1.txt", cb);

function cb(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("File data - >" + data);
    fs.readFile("f2.txt", cb2);
  }
}

function cb2(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("File data - >" + data);
  }
}

console.log("after");
