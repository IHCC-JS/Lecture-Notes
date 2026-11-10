// DO NOT LOOK HERE - THIS FILE HANDLES ALL OF THE EVENTS
// We will learn events later in the course
// All you need to know: when a user picks a class, we tell fillPage.js to show it

import {displayClassInfo} from "./fillPage.js"

const devClasses = [
    "BCA185", //Beg Web
    "CIS 598", //Python
    "CIS 198", //JavaScript
];

function populateClassSelect() {
    const select = document.querySelector("#classSelect")
    devClasses.forEach((cls) => {
        const option = document.createElement("option")
        option.value = cls
        option.textContent = cls
        select.appendChild(option)
    })
}

function handleSubmit() {
    const select = document.querySelector("#classSelect")
    const selectedClass = select.value

    if (selectedClass) {
        displayClassInfo(selectedClass)
    } else {
        displayClassInfo(null)
    }
}

populateClassSelect()
document.querySelector("#submitBtn").addEventListener("click", handleSubmit)

