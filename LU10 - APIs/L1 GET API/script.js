// https://pokeapi.co/
//https://randompokemon.com
// pikachu or turtwig

const form = document.querySelector("form");
const searchInput = document.querySelector("#pokemonName");
const pokeArticle = document.querySelector("#pokemonData");

const getPokeData = async (search) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
    return await response.json();
};

const formatPoke = (poke) => {
    //the height is in decimeters
    pokeArticle.innerHTML = `
      <article>
        <h2>${poke.name}</h2>
        <p>HP: ${poke.stats[0].base_stat}</p>
         <p>Height: ${poke.height * 10}cm</p> 
        <img src="${poke.sprites.front_default}" alt="sprite"/>
      </article>`;
};

const handleFormSubmit = async (e) => {
    e.preventDefault();
    const search = searchInput.value.trim(); //TODO lowercase
    const data = await getPokeData(search);
    console.log(data);
    formatPoke(data);
};

form.addEventListener("submit", handleFormSubmit);



