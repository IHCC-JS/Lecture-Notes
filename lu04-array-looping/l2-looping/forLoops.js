// For loop structure
// for (initialization, condition, increment/decrement){
// code goes here
// }

//simple for loop ex
for (let i = 0; i <= 5; i++) {
    console.log(i)
}
// 0 1 2 3 4 5

//going in reverse
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// 5 4 3 2 1 0

//looping doing math
for (let i = 0; i <= 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}

//Example of looping thought to change the array
const countries = ['United States', 'Mexico', 'Canada', 'Cuba', 'Panama']
const newArr = []
//notice how the amount of loops is linked to the length of the array.
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

