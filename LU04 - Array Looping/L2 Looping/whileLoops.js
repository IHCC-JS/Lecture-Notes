let i = 0
while (i <= 5) {
  console.log(i)
  i++
}

// 0 1 2 3 4 5

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)

// 0 1 2 3 4 5



let password = "";
const correctPassword = "secret";

while (password !== correctPassword) {
    password = prompt("Enter the password:");
}

console.log("Access granted!");
