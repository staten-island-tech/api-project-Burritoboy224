const URL = `https://pokeapi.co/api/v2/pokemon?limit=649&offset=0`;
import "./style.css";
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
            const cardsContainer = document.querySelector(".cards");
        
            pokemonList.forEach((pokemon) => {
                const card = document.createElement("div");
                card.classList.add("card");
        
                const description = document.createElement("h2");
                description.classList.add("description");
                description.textContent = pokemon.name;
        
                const image = document.createElement("img");
                image.classList.add("image");
                image.src = pokemon.image;
                image.alt = pokemon.name;
        
                // Add event listener to each card
                card.addEventListener("click", async() => {
                    const response2 =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                    const response3 = await response2.json();
                    console.log(response3);
                    await document.querySelector('body').insertAdjacentHTML(
                        "beforeend",
                        `<dialog class="cardsssssssssssss">
                        <h2 class = "text">${pokemon.name}</h2>
                        <img src="${pokemon.image}" alt="">
                        <h2 class = "text"> HP: ${response3.stats[0].base_stat}</h2>
                        <h2 class = "text"> ATK: ${response3.stats[1].base_stat}</h2>
                        <h2 class = "text"> DEF: ${response3.stats[2].base_stat}</h2>
                        <h2 class = "text"> SP-ATK: ${response3.stats[3].base_stat}</h2>
                        <h2 class = "text"> SP-DEF: ${response3.stats[4].base_stat}</h2>
                        <h2 class = "text"> SPD: ${response3.stats[5].base_stat}</h2>
                          <button alt = "click escape to return" id="close" class="button-1" autofocus> click to return </button>
                        </dialog>`
                        );
                        document.querySelector("dialog").showModal();
                        document.getElementById("close").addEventListener("click",function(){
                            this.parentElement.remove();
                          })
                    console.log(`Clicked on ${pokemon.name} card`); 
                });
        
                card.appendChild(description);
                card.appendChild(image);
        
                cardsContainer.appendChild(card);
            });
        }

        
       

        async function searchPokemon(search) {
            const filterPokemon = arrData.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
            const pokemonDetail = await Promise.all(filterPokemon.map(pokemonImage));
           
            const cardsContainer = document.querySelector(".cards");
            cardsContainer.innerHTML = "";


            if (pokemonDetail.length > 0) {
                insertPokemon(pokemonDetail);
            } else {
                cardsContainer.innerHTML = "<p>Loser cant even spell the name right LOOOL</p>";
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

