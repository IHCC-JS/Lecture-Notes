import { MAX_COUNT, MIN_COUNT } from "./limits.js"

//Notice the use of JSDoc comments
//https://jsdoc.app/about-getting-started

/**
 * Updates the count display
 * @param currentCount
 * @param countDisplay
 */
export function updateDisplay(currentCount, countDisplay) {
    countDisplay.textContent = currentCount
}

/**
 * Handles the increment button click, respecting MAX_COUNT.
 * @param currentCount
 * @param countDisplay
 * @returns {*}
 */
export function incrementCount(currentCount, countDisplay) {
    if (currentCount < MAX_COUNT) {
        currentCount++
        updateDisplay(currentCount, countDisplay)
    }
    return currentCount
}

/**
 * Handles the decrement button click, respecting MIN_COUNT.
 * @param currentCount
 * @param countDisplay
 * @returns {*}
 */
export function decrementCount(currentCount, countDisplay) {
    if (currentCount > MIN_COUNT) {
        currentCount--
        updateDisplay(currentCount, countDisplay)
    }
    return currentCount
}
