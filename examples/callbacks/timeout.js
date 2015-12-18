// Learning callbacks

// setTimeout receives as arguments:
//  - a function
//  - a number representing the number of milliseconds to *wait* until calling the function.
// We can call the function "callback function"

//  Timeline:
//   |
// 1 *- before setTimeout (console.log)
//   |
// 2 *---------------------------+- calling setTimeout
// 3 * log("after setTimeout")   | ^
//   |                           | | <--- This is represeting one second (1000ms)
//   |                           | v
// 4 |                           *- console.log("Inside of the setTimeout function")

console.log("Before settimeout");       // 1
setTimeout(function () {                // 2
  console.log("Inside of setTimeout");  // 4
}, 1000);
console.log("After setTimeout");        // 3
