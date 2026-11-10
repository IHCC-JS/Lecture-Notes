const nameField = document.querySelector('#name');
const emailField = document.querySelector('#email');
const bookField = document.querySelector('#book');

const outputTitle = document.querySelector('#output-title');
const outputName = document.querySelector('#output-name');
const outputEmail = document.querySelector('#output-email');

const form = document.querySelector('form');

let name = '';
let email = '';
let title = '';

form.addEventListener('submit', (e) => {
    //prevents the screen from refreshing on submitting
    //https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault
    e.preventDefault();
    name = nameField.value;
    email = emailField.value;
    title = bookField.value;

    //or use this: https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
    const formData = new FormData(form);
    console.log(formData)
    console.log("Name:", formData.get('name'));

    outputName.textContent = name;
    outputEmail.textContent = email;
    outputTitle.textContent = title;
});

bookField.addEventListener('change', () => {
    console.log(`Picked book: ${bookField.value}`);
});

// When the user leaves the name field, remove any special characters
// https://developer.mozilla.org/en-US/docs/Web/API/Element/focusout_event
// Do "input" event first to show
nameField.addEventListener('focusout', () => {
    console.log(nameField.value);
    const regex = /[^A-Za-z\s]/g;
    nameField.value = nameField.value.replace(regex, '');
});
