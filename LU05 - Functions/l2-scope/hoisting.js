//"use strict"
// you can turn this on to avoid some of the hoisting issues
// https://www.w3schools.com/js/js_hoisting.asp

// We call the function successfully before its definition line.
// Don't do this
logTimestamp("Function called before it's defined.");

function logTimestamp(message) {
    console.log(`${message} (Time: ${new Date().toLocaleTimeString()})`);
}

// Declaration hoisting
// Declaring a variable before using it is called "variable hoisting".
let letData = "Value assigned now.";
console.log(`3.3 After declaration, letData is: ${letData}`);

