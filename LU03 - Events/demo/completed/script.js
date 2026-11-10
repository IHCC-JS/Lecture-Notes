//creates amount of the boxes based on what number the user entered
//generates a random number and figures out if its prime, even, or odd
//and sets the color based on that
//displays the number of boxes with a random number inside
const generateBoxes = (number) => {
  const insertBox = document.querySelector(".inside-bottom-column")
  insertBox.innerHTML = ""

  for(let i = 0; i < number; i++){
    const rndNum = Math.floor(Math.random() * (100))
    let color = ""

    if(rndNum % 2 == 0){
      color = "blue"
    }
    else {
      color = "red"
    }

    let isPrime = true;
    for (let j = 2; j < rndNum; j++) {
      if (rndNum % j == 0) {
        isPrime = false
        break
      }
    }
    if (isPrime) {
      color = "green"
    }
    insertBox.innerHTML += `<div id="gen-${color}">${rndNum}</div>`
  }
}
//collect user data and shows error message if user entered
//anything besides 0-100
const retrieveData = () => {
  const errorMessage = document.querySelector(".error-message")
  const number = document.getElementById("number").value
  const validNumber = /^[0-9]+$/g

  if (!validNumber.test(number) || number < 0 || number > 100) {
    errorMessage.classList.remove("hidden")
    return null
  }

  errorMessage.classList.add("hidden")
  return number
}
//main program that runs
const mainProgram = () => {
  const number = retrieveData()
  generateBoxes(number)
}
//alows for user to press enter
number.addEventListener('keydown', e => {
  if(e.key === "Enter"){
    e.preventDefault()
    mainProgram()
  }
})

const button = document.querySelector("button")
button.addEventListener("click", mainProgram)
