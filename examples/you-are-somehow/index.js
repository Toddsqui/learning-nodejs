/* Creating my first Node-based website */

// Show some output
console.log("Starting the server.");

// "http" is a built-in library (you don't have to install it)
// Documentation: https://nodejs.org/api/http.html
var http = require("http");

var x = ((Math.random() * 3) + 1);
var compliments = new Array();
compliments[0] = "You are so awesome! I love you!";
compliments[1] = "I can't believe how wonderful you are!";
compliments[2] = "You are so smart. I am so lucky to know you!";
var randomItem = compliments[x];
// callback function is a function provided as argument
// to another function
var server = http.createServer(function (request, response) {
  // the requestion is what we get (from the browser)
  // the response is what we send to the browser

  // Show some output
  console.log("> New request: ", request.url, new Date());

  // This will send "Hello World" to the browser (in the response)

  if (request.url === "/") {
    // response status code is 200 by default which means "success"
    // response.statusCode = 200;
    response.end(randomItem);
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
