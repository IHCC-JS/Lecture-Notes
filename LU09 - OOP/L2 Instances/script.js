import Dog from './Dog.js';

// Create Two Independent Instances (Objects)
const dog1 = new Dog("Rayne", "Doberman", true);
const dog2 = new Dog("Buddy", "Labrador", false);

console.log(dog1.printDog());
console.log(dog2.printDog());

//Dog 1 barks (happy)
console.log("Dog 1 bark:", dog1.bark());

// Dog 2 barks (unhappy)
console.log("Dog 2 bark:", dog2.bark());

//Change Dog 1's state ---
dog1.isHappy = false; // Directly changing the state of dog1

//Final State Check & Proof of Independence

// This line proves that dog1's state has changed, but dog2's state has NOT.
console.log(dog1.printDog()); //Happy is now false
console.log(dog2.printDog());