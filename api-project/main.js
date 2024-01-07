const URL = `https://pokeapi.co/api/v2/pokemon?limit=649&offset=0`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const data = await response.json();
        const arrData = data.results;

        async function pokemonImage(pokemon) {
            const getResponse = await fetch(pokemon.url);
            const pokemonData = await getResponse.json();
            return {
                name: pokemon.name,
                image: pokemonData.sprites.front_default
            };
        }

        async function insertPokemon(pokemonList) {
            pokemonList.forEach((pokemon) => document.querySelector(".cards").insertAdjacentHTML("beforeend",
                `<div class="card">
                    <h2 class ="description">${pokemon.name}</h2>
                    <img class ="image" src="${pokemon.image}" alt="${pokemon.name}"><br>
                </div>`
            ));
        }

        async function searchPokemon(search) {
            const filterPokemon = arrData.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
            const pokemonDetail = await Promise.all(filterPokemon.map(pokemonImage));
            
            const cardsContainer = document.querySelector(".cards");
            cardsContainer.innerHTML = "";

            if (pokemonDetail.length > 0) {
                insertPokemon(pokemonDetail);
            } else {
                cardsContainer.innerHTML = "<p>Loser</p>";
            }
        }
        insertPokemon(await Promise.all(arrData.map(pokemonImage)));

        const search = document.querySelector("#searchInput");
        search.addEventListener("input", (event) => {
            searchPokemon(event.target.value);
        });

    } catch (error) {
        console.log("error", error);
        document.querySelector(".cards").textContent = "Skill issue";
    }
}

getData(URL);