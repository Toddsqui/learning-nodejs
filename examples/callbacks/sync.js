// Learning callbacks

// Sync vs Async
// Syncronous example
// Syncronous: one after another
// Timeline:
//  |
//  *- declaring the foo function
//  |
//  *- create the bar variable and assign 0 to it
//  *- Output the bar value (bar === 0)
//  |
//  *- bar = foo() <- We assign the value returned
//  |                 by the foo call to the bar variable
//  |
//  *- Output the bar value (bar === 42)

function foo () {
  return 42;
}

var bar = 0;
console.log("Initial value of bar is: " + bar + ". Calling foo().");

// foo is a syncronous function, so, the bar value will be 42
// (returned by foo()) after the very next line
bar = foo();
console.log("Value of bar after assinging it to foo() is: " + bar);
