// Global Scope Declaration
// Outside any function
const PI_VALUE = 3.14159;
let satelliteStatus = "Operational";

console.log("\n Example: Changing Global Variable");

function calculateArea(radius) {
    // Accessing global constant
    const area = PI_VALUE * radius * radius;

    // Modifying Global Variable, Best to avoid this usually
    satelliteStatus = "Rebooting";

    return `Area is ${area.toFixed(2)}. Status changed to '${satelliteStatus}'.`;
}

console.log(calculateArea(5));
console.log(`PI is still ${PI_VALUE}. Status is now: ${satelliteStatus}`);


console.log("\nExample: Local Isolation");

function calculateTotal(itemName, basePrice, state) {
    // These are Local to the function's scope.
    let taxRate;

    // Determine Local Tax Rate
    switch (state) {
        case "TX":
            taxRate = 0.0625;
            break;
        case "FL":
            taxRate = 0.07;
            break;
        default:
            taxRate = 0.05;
    }

    const taxAmount = basePrice * taxRate;
    let finalPrice = basePrice + taxAmount;

    return `Item: ${itemName} | Base: $${basePrice.toFixed(2)} | Total Price: $${finalPrice.toFixed(2)}`;
}

console.log(calculateTotal("Laptop", 1200.00, "TX"));
console.log(calculateTotal("Book", 15.50, "FL"));
console.log(calculateTotal("T-Shirt", 55.00, "CA"));

// Attempting to access the local value from Global Scope
//console.log(taxRate);


console.log("\nWhy VAR is Different");

function checkVarScope() {
    //if statement used for demonstration
    if (true) {
        var functionScopedVar = "I leak outside the if-block!";
        let blockScopedLet = "I am locked in the if-block.";
    }

    // VAR LEAK: functionScopedVar is still accessible here because 'var' is Function Scoped
    // Even though it's declared inside the IF block
    console.log(`VAR LEAK: ${functionScopedVar}`);
    //console.log(`Can't do this ${blockScopedLet}`);
}

checkVarScope();
