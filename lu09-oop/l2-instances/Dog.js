export default class Dog {
    //Don't add in Part 1
    #energyLevel; //private field

    constructor(name, breed, initialEnergy) {
        this.name = name;
        this.breed = breed;
        this.#energyLevel = initialEnergy;
    }

    //Don't add in Part 1
    bark() {
        if (this.#energyLevel > 20) {
            this.#energyLevel -= 10;
            return `${this.name} says: Woof! Energy is now ${this.#energyLevel - 10}.`;
        } else {
            return `${this.name} is too tired to bark!`;
        }
    }

    get energy() {
        return this.#energyLevel;
    }
}