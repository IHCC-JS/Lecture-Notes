//No need for {} bc we used export default
import Person from "./Person.js";

//Singleton
const personSingleton = {
    firstName: "Luke",
    lastName: "Matheis",
    country: "United States",
    skills: ["HTML", "CSS", "JavaScript"],
};

console.log("Singleton skills:", personSingleton.skills[2]);

// Creating multiple, independent instances (Objects) from the Person Class (Blueprint)
const person1 = new Person("Bob", "Joe", 250, ["JavaScript", "HTML"]);
const person2 = new Person("Tim", "Smith", 28, ["Java"]);

console.log("Person 1 Instance:", person1);
console.log("Person 2 Instance:", person2);

// Direct access to public properties
console.log(`Person 2's first name via direct access: ${person2.firstName}`);
console.log(`Person 1's full name via method: ${person1.getFullName()}`);


// Accessing the private #score property via the public getter method
console.log("Person 1 Initial Score (via getter): ", person1.score); // No parenthesis!

// Attempting to access the private property directly (should fail/return undefined)
console.log("Attempting direct access to private score:", person1['#score']);

// Using the setter method to safely update the private #score property
// Do this if we have time.

//update via the setter
person1.score = 300;
console.log("Person 1 Score AFTER successful update:", person1.score);

// Attempt to set a negative score (should be blocked by the setter's logic)
person1.score = -50;
console.log("Person 1 Score AFTER attempted illegal update:", person1.score); // Should still be 300