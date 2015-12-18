// Learning callbacks

// Sync vs Async
// Asyncronous example
// Asyncronous: multiple things in "parallel"
// Timeline:
//  |
//  *- declaring the fooAynsc function        fooAysnc --->----+
//  |                                             |            \ callback(42)
//  *- create the bar variable and assign 0 to it |            |
//  *- Output the bar value (bar === 0)           |            V
//  |         ____________________________________/            |
//  |        /                         _____________<__________/
//  |       /                         /
//  |      |                         42
//  |      ^ (callback function)     v
//  \      |                         |
//  *------+ fooAsync(function (magicNumber) { <-------
//         |    bar = magicNumber;
//         + });

// The "callback" parameter is a function
function fooAsync (theCallbackFunction) {
   setTimeout(function () {
     theCallbackFunction(42); // call the callback functio
   }, 1000);
}

var bar = 0;
console.log("Initial value of bar is: " + bar + ". Calling foo().");

// foo is a syncronous function, so, the bar value will be 42
// (returned by foo()) after the very next line
// Sync: bar = foo();
// Async follows:

fooAsync(function(magicNumber){
  bar = magicNumber + 1;
  console.log("Value of bar after assinging it to the callback response (magicNumber) and adding one is: " + bar);
});
