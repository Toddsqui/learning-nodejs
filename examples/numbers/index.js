

//----------------------------------------------------------------------------------------//
// Include the fs module
var fs = require("fs");


//YOU ESTABLISH THE VARIABLES HERE
var myNumbers = "";
var numbers = 1000;
for(var i = 1; i <= numbers; i++){
  //this line will populate the myNumbers variable
  myNumbers += (i + " \n");
};

// ---------------------------------------------------------------------------------------//



fs.writeFile("numbers.txt", myNumbers, function(err){
  if(err){
    return console.log("Houston, we have a problem!");
  }
  console.log("File Written!");
  console.log("I hope you are happy now! :) ");
});
