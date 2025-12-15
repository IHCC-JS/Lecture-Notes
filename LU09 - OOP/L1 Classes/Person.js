export default class Person {
    //Private Fields (Encapsulation)
    #score;

    constructor(firstName, lastName, initialScore, skills) {
        this.firstName = firstName; // Public Property
        this.lastName = lastName;
        this.#score = initialScore;
        this.skills = skills;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get score() {
        return this.#score;
    }

    // If we have time
    set score(newScore) {
        if (newScore >= 0) {
            this.#score = newScore;
        } else {
            console.error("Score cannot be negative.");
        }
    }
}