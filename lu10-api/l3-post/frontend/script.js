const API_URL = 'http://localhost:3000/api/guests';

const form = document.querySelector("form");
const nameField = document.querySelector('#name');
const messageField = document.querySelector('#message');
const plusOneField = document.querySelector('#plusOne');
const guestListContainer = document.querySelector('#guestList');

async function loadGuests() {
    const response = await fetch(API_URL);
    const guests = await response.json();

    guestListContainer.innerHTML = '<h2>Current Guests</h2>';

    guests.forEach(guest => {
        guestListContainer.innerHTML += `
            <div class="guest-card">
                <strong>${guest.name}</strong> ${guest.plusOne ? '<span class="plus-one">(+1)</span>' : ''}
                <p>"${guest.message}"</p>
            </div>
        `;
    });
}

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const guestData = {
        name: nameField.value,
        message: messageField.value,
        plusOne: plusOneField.checked
    };

    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guestData)
    });

    if (response.ok) {
        loadGuests(); // Refresh the list
        e.target.reset(); // Clear form
    }
});

loadGuests();