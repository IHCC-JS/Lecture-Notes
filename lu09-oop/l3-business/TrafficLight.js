export default class TrafficLight {
    //all traffic lights have the same sequence
    static #SEQUENCE = ['red', 'green', 'yellow'];
    #currentStep = 0;

    constructor() {
        console.log("Traffic Light Instance Created.");
    }

    nextState() {
        // Calculate the next step, wrapping around to 0
        this.#currentStep = (this.#currentStep + 1) % TrafficLight.#SEQUENCE.length;
        return TrafficLight.#SEQUENCE[this.#currentStep];
    }

    //Static Method related to the class, not the instance
    static getTransitionTime(color) {
        if (color === 'yellow') return 1000;
        if (color === 'red') return 2000;
        return 4000;
    }
}