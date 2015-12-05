/* Creating my first Node-based website */

// Show some output
console.log("Starting the server.");

// "http" is a built-in library (you don't have to install it)
// Documentation: https://nodejs.org/api/http.html
var http = require("http");


// callback function is a function provided as argument
// to another function
var server = http.createServer(function (request, response) {
  // the requestion is what we get (from the browser)
  // the response is what we send to the browser

  // Show some output
  console.log("> New request: ", request.url, new Date());

  // This will send "Hello World" to the browser (in the response)
  var userCount = 0;
  http.createServer(function (request, response){
    userCount++;
    response.writeHead(200, ('Content-Type': 'text/plain'));
    response.write('You have had ' + userCount + 'visits!')
    response.end();
  }).listen(9000);


  if (request.url === "/") {

    // response.end("Hello World!");
  } else {
    var problem = response.statusCode = 404;
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
