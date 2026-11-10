// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function squareTraditional(n) {
    return n * n;
}

console.log(squareTraditional(2)); // 4

const square = (n) => {
    return n * n;
};

console.log(square(2)); // -> 4

//implied return of the function
const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

console.log(printFullName('Luke', 'Matheis'))

// convert to => during lecture
function weightOfObject(mass, gravity = 9.81) {
    let weight = mass * gravity + ' N' // the value has to be changed to string first
    return weight
}

console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon