const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

console.log("For of loop:")
for (const tech of webTechs) {
    console.log(tech.toUpperCase())
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB


for (const tech of webTechs) {
    console.log(tech[0]) // get only the first letter of each element, H C J R N M
}


console.log("\nFor of loop without index:\n")
// for...of does NOT give index
for (const tech of webTechs) {
    console.log(`${tech} is at index ?`) // no way to get index here
}


// so you have to do this instead
for (let i = 0; i < webTechs.length; i++) {
    console.log(`${i}: ${webTechs[i]}`)
}

// OR
//any array has a `forEach` method
webTechs.forEach((tech, index) => {
    console.log(`${index}: ${tech}`)
})
