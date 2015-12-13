console.log("Starting the server.");

//----------------------------------------------------------------------------------------//


//YOU ESTABLISH THE VARIABLES HERE
var http = require("http");
var myNumbers = "";
var numbers = 1000;
for(var i = 1; i <= numbers; i++){
  //this line will populate the myNumbers variable
  myNumbers += (i + " \n");
  //this line will print the myNumbers variable to the terminal
  console.log(myNumbers);
};

//
var fs = require("fs");

// ---------------------------------------------------------------------------------------//


// THIS LINE OF CODE CREATES THE DUMMY SERVER THAT YOU'RE GOING TO WORK ON
// DEFENSIVE PROGRAMMING -- YOU CORRECT FOR ERRORS BEFORE YOU RUN THE CODE
server.listen(9000, function(err) {
  if (err) {
    console.error("Cannot start the server.");
    console.error(err);
    return;
  }
  console.log("Server started on port 9000.");
});
