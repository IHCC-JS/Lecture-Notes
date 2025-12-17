export function calculateDistance(planetA, planetB) {
    //only returns the absolute value (positive)
    return Math.abs(planetA.distanceFromSun - planetB.distanceFromSun);
}

export function formatResult(distance, nameA, nameB) {
    if (distance === 0) {
        return `You selected the same planet! Distance is 0 AU.`;
    }
    const distanceString = distance.toFixed(2);
    return `The distance between ${nameA} and ${nameB} is approximately ${distanceString} AU.`;
}