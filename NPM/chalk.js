var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
}); 


// How to Install a Package -
 // go to the folder you want to install the package in at the Terminal
 // and Type -> npm install <packageName>
 // Package will be Downloaded
 