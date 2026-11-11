const area = document.getElementById("pizza-area");
const card = document.getElementById("order-card");

// pricing
const CRUST_THIN_PRICE = 5;
const CRUST_REGULAR_PRICE = 7;
const CRUST_THICK_PRICE = 9;

const SAUCE_TOMATO_PRICE = 2;
const SAUCE_WHITE_PRICE = 3;
const SAUCE_PESTO_PRICE = 4;

const CHEESE_MOZZARELLA_PRICE = 2;
const CHEESE_CHEDDAR_PRICE = 2.5;

const TOPPING_PEPPERONI_PRICE = 3;
const TOPPING_MUSHROOMS_PRICE = 2;
const TOPPING_OLIVES_PRICE = 1.5;

let totalPrice = 0;

const userCrust = prompt("Choose your crust: thin, regular, or thick?");
const userSauce = prompt("Choose your sauce: tomato, white, or pesto?");
const userCheese = prompt("Choose your cheese: mozzarella or cheddar?");
const userTopping = prompt("Choose one topping: pepperoni, mushrooms or olives");
let crust, sauce, cheese, topping;

let crustImg = "";
switch (userCrust) {
    case "thin":
        crustImg = "assets/crust-thin.svg";
        totalPrice += CRUST_THIN_PRICE;
        crust = "Thin";
        break;
    case "thick":
        crustImg = "assets/crust-thick.svg";
        totalPrice += CRUST_THICK_PRICE;
        crust = "Thick";
        break;
    default:
        crust = "Regular";
        crustImg = "assets/crust-regular.svg";
        totalPrice += CRUST_REGULAR_PRICE;
}
const crustElement = document.createElement("img");
crustElement.src = crustImg;
crustElement.className = "absolute inset-0 w-[300px] h-[300px]";
area.appendChild(crustElement);

let sauceImg = "";
switch (userSauce) {
    case "white":
        sauce = "White"
        sauceImg = "assets/sauce-white.svg";
        totalPrice += SAUCE_WHITE_PRICE;
        break;
    case "pesto":
        sauce = "Pesto"
        sauceImg = "assets/sauce-pesto.svg";
        totalPrice += SAUCE_PESTO_PRICE;
        break;
    default:
        sauce = "Tomato"
        sauceImg = "assets/sauce-tomato.svg";
        totalPrice += SAUCE_TOMATO_PRICE;
}
const sauceElement = document.createElement("img");
sauceElement.src = sauceImg;
sauceElement.className = "absolute inset-0 w-[300px] h-[300px]";
area.appendChild(sauceElement);

let cheeseImg = "";
switch (userCheese) {
    case "cheddar":
        cheese = "Cheddar"
        cheeseImg = "assets/cheese-cheddar.svg";
        totalPrice += CHEESE_CHEDDAR_PRICE;
        break;
    default:
        cheese = "Mozzarella"
        cheeseImg = "assets/cheese-mozzarella.svg";
        totalPrice += CHEESE_MOZZARELLA_PRICE;
        break;
}

const cheeseElement = document.createElement("img");
cheeseElement.src = cheeseImg;
cheeseElement.className = "absolute inset-0 w-[300px] h-[300px]";
area.appendChild(cheeseElement);

let toppingImg = "";
switch (userTopping) {
    case "mushrooms":
        topping = "Mushrooms"
        toppingImg = "assets/topping-mushrooms.svg";
        totalPrice += TOPPING_MUSHROOMS_PRICE;
        break;
    case "olives":
        topping = "Olives"
        toppingImg = "assets/topping-olives.svg";
        totalPrice += TOPPING_OLIVES_PRICE;
        break;
    default:
        topping = "Pepperoni"
        toppingImg = "assets/topping-pepperoni.svg";
        totalPrice += TOPPING_PEPPERONI_PRICE;
        break;
}

const toppingElement = document.createElement("img");
toppingElement.src = toppingImg;
toppingElement.className = "absolute inset-0 w-[300px] h-[300px]";
area.appendChild(toppingElement);

const confirmOrder = confirm("Your pizza costs $" + totalPrice.toFixed(2) + ". Do you want to place the order?");

//pizza is only output if user confirms
//TODO just remove the card or convert to NOT use string template
if (confirmOrder) {
    alert("Thank you! Your pizza is on the way!");
    card.innerHTML =
        '<h2 class="text-2xl font-bold text-green-700 mb-2">Your Order</h2>' +
        '<div class="space-y-1">' +
        '<p><span class="font-semibold">Crust:</span> ' + crust + '</p>' +
        '<p><span class="font-semibold">Sauce:</span> ' + sauce + '</p>' +
        '<p><span class="font-semibold">Cheese:</span> ' + cheese + '</p>' +
        '<p><span class="font-semibold">Topping:</span> ' + topping + '</p>' +
        '<p class="pt-2 border-t border-red-200"><span class="font-bold">Total:</span> $' + totalPrice.toFixed(2) + '</p>' +
        '</div>';
} else {
    alert("Order cancelled.");
    card.innerHTML = "";
}