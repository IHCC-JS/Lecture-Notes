import Dog from './Dog.js';

const dogs = [
    new Dog("Goofy", "Coonhound", 90),
    new Dog("Buddy", "Labrador", 30),
];

const dogsContainer = document.querySelector('#dogs');

const createDogCardHTML = (dog) => `
    <div class="dog-card" id=${dog.name}>
        <h2>${dog.name}</h2>
        <p>Energy: <span class="dog-energy">${dog.energy}</span></p>
        <button class="bark-btn">Bark</button>
    </div>
`;

function renderDogs() {
    dogsContainer.innerHTML = dogs.map(createDogCardHTML).join('');

    dogs.forEach((dog) => {
        const dogCard = dogsContainer.querySelector(`#${dog.name}`);

        dogCard.querySelector('.bark-btn').addEventListener('click', () => {
            dog.bark();
            dogCard.querySelector('.dog-energy').textContent = dog.energy;
        });
    });
}

renderDogs();