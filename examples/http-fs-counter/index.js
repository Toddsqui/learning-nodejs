/* Creating my first Node-based website */

// Show some output
console.log("Starting the server.");

// "http" is a built-in library (you don't have to install it)
// Documentation: https://nodejs.org/api/http.html
// Require the dependencies
// http is required for the http server
var http = require("http");
// fs is needed to write/read the file
var fs = require("fs");

// By default, set the user count to 0
var userCount = 0;

/// Read the counter.txt to get the previous count
fs.readFile("counter.txt", "utf-8", function(err, fileContent){
    // Store the number in memeory (defaults to 0)
    userCount = parseInt(fileContent) || 0;
    console.log("Read the file and the user count is: " + userCount);
});

// callback function is a function provided as argument
// to another function
var server = http.createServer(function (request, response) {
  // the requestion is what we get (from the browser)
  // the response is what we send to the browser

  // Show some output
  console.log("> New request: ", request.url, new Date());

  // This will send "Hello World" to the browser (in the response)

  if (request.url === "/") {
    userCount++;
    // Update the counter.txt
    fs.writeFile("counter.txt", userCount.toString(), function(err){
      if(err){
        return console.log("Houston, we have a problem!", err);
      }
    });

    // response status code is 200 by default which means "success"
    // response.statusCode = 200;
    response.end("Hello World! You have visited this site " + userCount);
  } else {
    // set the status code to 404 (Not found)
    // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#4xx_Client_Error
    response.statusCode = 404;
    response.end("Dude this page doesn't work yet!");
  }
});

// Listen on port 9000
server.listen(9000, function (err) {
  if (err) {
    console.error("Cannot start the server");
    console.error(err);
    return;
  }
  console.log("Server started on port 9000.")
});
