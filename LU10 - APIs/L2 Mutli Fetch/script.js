// Replace value with your actual Cat API key
const apiKey = 'PUT KEY HERE';

//TODO show other breed data on screen for breed selected

//TODO change this to querySelector
const breedSelect = document.getElementById('breedSelect');
const fetchCatButton = document.getElementById('fetchCatButton');
const catImageContainer = document.getElementById('catImageContainer');

// fill the breed dropdown list
const populateBreedDropdown = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/breeds', {
        headers: {
            'x-api-key': apiKey
        }
    });
    const breeds = await response.json();

    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);
    });
}

// display a cat image based on the breed
const fetchCatImage = async (e) => {
    e.preventDefault()
    const selectedBreedId = breedSelect.value;
    const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${selectedBreedId}`, {
        headers: {
            'x-api-key': apiKey
        }
    });
    const catData = await response.json();

    if (catData.length > 0) {
        const catImageUrl = catData[0].url;
        const image = document.createElement('img');
        image.src = catImageUrl;
        catImageContainer.innerHTML = '';
        catImageContainer.appendChild(image);
    } else {
        catImageContainer.innerHTML = '<p>No cats found for this breed</p>';
    }
}

//TODO make this code be better async. User could click button before drop down is populated
//TODO change this to drop down select remove need for button
fetchCatButton.addEventListener('click', fetchCatImage);

//runs before click event
populateBreedDropdown();
