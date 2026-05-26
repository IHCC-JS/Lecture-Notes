// function without parameter
function addTwoNumbers() {
    let numOne = 10;
    let numTwo = 20;
    let sum = numOne + numTwo;

    console.log(sum);
}

addTwoNumbers(); // a function has to be called by its name to be executed

//declare a function with a return
function printFullNameHardCoded() {
    let firstName = "Asabeneh";
    let lastName = "Yetayeh";
    let space = " ";
    let fullName = firstName + space + lastName;
    return fullName;
}

//we can then use that return however we want
console.log(printFullNameHardCoded());

//this function has one argument
function areaOfCircle(r) {
    let area = Math.PI * r * r;
    return area;
}

console.log(areaOfCircle(10)); // should be called with one argument

//function with two arguments
function printFullName(firstName, lastName) {
    //Check if EITHER name is null, undefined, or ""
    if (!firstName || !lastName) {
        return "first and last names are required.";
    }
    //First time using Template Literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    return `${firstName} ${lastName}`;
}

//call method with passing two arguments
console.log(printFullName("", null));
console.log(printFullName("Luke", "Matheis"));

// this function takes an array as a parameter and sums up the numbers in the array
function sumArrayValues(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
//calling a function
console.log(sumArrayValues(numbers));
console.log(sumArrayValues(12)); //returns 0 (method expects an array)

// function declaration

function sumAllNums() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumAllNums(1, 2, 3, 4)); // 10
console.log(sumAllNums(10, 20, 13, 40, 10)); // 93
console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40)); // 173

//has a default value of "day"
function greetings(name = "day") {
    return `have a great ${name}`;
}

console.log(greetings());
console.log(greetings("evening"));
