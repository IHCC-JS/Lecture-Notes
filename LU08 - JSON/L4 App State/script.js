const form = document.querySelector('form');
const name = document.querySelector('#name');
const age = document.querySelector('#age');
const isEmployed = document.querySelector('#isEmployed');
const image = document.querySelector('#image');
const submit = document.querySelector('#submit');
const output = document.querySelector('#bikini-bottom-list');

const STORAGE_KEY = 'bikiniBottomPeople';

//local state
let people = [];

function savePeople() {
    //convert JS to string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(people));
}

function loadPeople() {
    const storedData = localStorage.getItem(STORAGE_KEY);

    if (storedData) {
        //convert string to JS object
        return JSON.parse(storedData);
    }
    return null;
}

function renderPeople() {
    output.innerHTML = people.map(person => `
        <article>
            <h3>${person.name}</h3>
            <p>Age: ${person.age}</p>
            <p>Is Employed: ${person.isEmployed ? "Yes" : "Nope"}</p>
            <img src="${person.image}" alt="${person.name}" style="width: 200px;"/>
        </article>
    `).join('');
}

async function init() {
    const storedPeople = loadPeople();

    if (storedPeople) {
        people = storedPeople;
        console.log('Loaded people from localStorage.');
    } else {
        const response = await fetch('data/people.json');
        const data = await response.json();
        people.push(...data);
        console.log('Loaded people from data/people.json.');
        savePeople();
    }

    renderPeople();
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const newPerson = {
        name: name.value,
        age: Number(age.value),
        isEmployed: isEmployed.checked,
        image: image.value
    };
    people.push(newPerson);

    renderPeople();
    savePeople();
    form.reset();
});

init().then();
