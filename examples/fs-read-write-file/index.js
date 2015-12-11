// Require the file system module ("fs")
// https://nodejs.org/api/fs.html
var fs = require("fs");

// Create the foo.txt file and put there "The magic number is 42"
//              / console.log("Writing file")    / console.log("File written");
// Timeline -*-*------------------------------*-*-->
//            \ writeFile                    / callback function
//             *-----------writing file-----*
// This is an asyncronous call
fs.writeFile("foo.txt", "The magic number is 42", function (err) {
  // This function is executed AFTER writing the file on your computer hard disk
  if (err) {
    return console.log("Something went wrong writing the file: " + err);
  }
  console.log("File written.");

  console.log("Reading the file");

  // you have to move the reading function insdie of the writing function so that thre are no timing issues when you call the writing function
  fs.readFile("foo.txt", "utf-8", function (err, fileContent) {
    if(err){
      return console.log("There is an error", err);
    }
    console.log("File Read!");
    console.log("The content is: " +  fileContent + userCount);
  });
// end of reading function
});
console.log("Writing the file");
