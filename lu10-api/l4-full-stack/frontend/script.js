const gameForm = document.querySelector('#gameForm');
const gameGrid = document.querySelector('#gameGrid');
const platformFilter = document.querySelector('#platformFilter');
const titleInput = document.querySelector('#title');
const platformInput = document.querySelector('#platform');
const yearInput = document.querySelector('#year');
const completeCheckbox = document.querySelector('#isComplete');

const API_BASE = "http://localhost:3000/api";


async function loadPlatforms() {
    const res = await fetch(`${API_BASE}/platforms`);
    const platforms = await res.json();

    // Keep the "All Platforms" option
    platformFilter.innerHTML = '<option value="">All Platforms</option>';

    platforms.forEach(p => {
        const opt = document.createElement('option');
        opt.value = p;
        opt.textContent = p;
        platformFilter.appendChild(opt);
    });
}

async function loadGames(platform = "") {
    let url = `${API_BASE}/games`;
    if (platform) {
        url = `${API_BASE}/games/search?platform=${platform}`;
    }

    const res = await fetch(url);
    const games = await res.json();

    gameGrid.innerHTML = "";
    games.forEach(game => {
        const card = document.createElement('div');
        card.className = 'game-card';
        card.innerHTML = `
            <h3>${game.title}</h3>
            <p>${game.platform} (${game.releaseYear})</p>
            ${game.isComplete ? '<p class="cib-badge">✓ Complete In Box</p>' : '<p>Loose Cartridge</p>'}
            <button class="delete-btn" onclick="deleteGame(${game.id})">Remove</button>
        `;
        gameGrid.appendChild(card);
    });
}

gameForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const newGame = {
        title: titleInput.value,
        platform: platformInput.value,
        releaseYear: parseInt(yearInput.value),
        isComplete: completeCheckbox.checked
    };

    await fetch(`${API_BASE}/games`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newGame)
    });

    gameForm.reset();
    loadGames();
    loadPlatforms();
});

async function deleteGame(id) {
    if (!confirm("Remove this game from collection?")) {
        return;
    }

    await fetch(`${API_BASE}/games/${id}`, {method: 'DELETE'});
    loadGames();
    loadPlatforms();
}

platformFilter.addEventListener('change', (e) => {
    loadGames(e.target.value);
});

loadGames();
loadPlatforms();