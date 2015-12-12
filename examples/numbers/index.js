console.log("Starting the server.");

var http = require("http");
var myNumbers = "1 \n 2 \n 3";
var numbers = 1000;
for(var i = 1; i <= numbers; i++){
  myNumbers.push(numbers + " \n");
  console.log(myNumbers);
};


var fs = require("fs");

var server = http.createServer(function (request, response){
//the request is what we get from the browser
//and the response is what we send to the browser


  console.log("> New request: ", request.url, new Date());

  if (request.url === "/"){
    response.end("Hello world! You have visited this site " + userCount)
  }

  response.statusCode = 404;
  response.end("Page not found");

});
// ----------------------------------------------------
fs.writeFile("numbers.txt", myNumbers, function(err){
  if(err){
    return console.log("Houston, we have a problem!");
  }
  console.log("File Written!");
  console.log("I hope you are happy now! :) ");
});





// now we are going to listen to the port 9000
server.listen(9000, function(err) {
  if (err) {
    console.error("Cannot start the server.");
    console.error(err);
    return;
  }
  console.log("Server started on port 9000.");
});
