import {updateDisplay, incrementCount, decrementCount} from "./logic.js";

// app state
let currentCount = 0;

const countDisplay = document.getElementById("count");
const incButton = document.getElementById("inc-btn");
const decButton = document.getElementById("dec-btn");

// initial count display
updateDisplay(currentCount, countDisplay);

// event listeners use function names imported from logic.js
// note the use of arrow functions
incButton.addEventListener("click", () => {
    currentCount = incrementCount(currentCount, countDisplay)
});

decButton.addEventListener("click", () => {
    currentCount = decrementCount(currentCount, countDisplay)
});

