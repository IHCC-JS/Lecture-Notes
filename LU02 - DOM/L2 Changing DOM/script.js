// (1) Change title to "City's Best Hot Dogs"
// Using textContent to change the text content of the element
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
const mainTitle = document.querySelector('header h1');
mainTitle.textContent = "City's Best Hot Dogs";

// (2) Change the order now button to red
// Using classList.remove() to remove existing background color classes
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// Using classList.add() to add new red background classes
const orderButton = document.querySelector('#hero button');
orderButton.classList.remove('bg-yellow-300', 'hover:bg-yellow-400');
orderButton.classList.add('bg-red-500', 'hover:bg-red-600');

// (3) remove the "Our Story" text, not the paragraph
// Using remove() to delete the element from the DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove
const storyHeading = document.querySelector('#our-story h2');
storyHeading.remove();

// (4) Add prices to the menu
// Why do i need the > div selector?
const menuCards = document.querySelectorAll('#menu-list div');
console.log(menuCards);

// Create one price element that we'll reuse
const price = document.createElement('p');
price.classList.add('text-lg', 'font-bold', 'text-green-600', 'mt-2', "p-4");

price.textContent = '$5.99';
const classicHotDog = menuCards[0];
classicHotDog.appendChild(price);


//TODO this last example needs work
//(5) Add a new menu item "veggie dog" to the middle of the menu (not end)
// Using innerHTML to set the HTML content of the new card
// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
// Using insertBefore to insert the new card at a specific position
// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

const menuList = document.querySelector('#menu-list');
const newMenuItem = document.createElement('div');
newMenuItem.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'overflow-hidden', 'hover:shadow-xl', 'transition-shadow', 'duration-300');
// TODO don't use html template literals
newMenuItem.innerHTML = `
    <img src="assets/veggie.jpg" alt="Classic Hot Dog" class="w-full h-48 object-cover">
    <div class="p-4">
        <h3 class="text-xl font-bold text-gray-800 mb-2">Veggie Dog</h3>
        <p class="text-gray-600">Don't want to eat meat? No problem try your Veggie Dog.</p>
    </div>
`;
// Insert the new item after the second card (before the third card)
// Using childNodes to access specific children
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
menuList.insertBefore(newMenuItem, menuCards[1]);

//TODO add more examples if we have extra time
