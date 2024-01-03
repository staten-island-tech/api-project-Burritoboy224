import './style.css'

const URL = "https://pokeapi.co/api/v2/pokemon?limit=649&offset=0" 
try {
    const response = await fetch (URL);
    if (response.status !=200){
        throw new error(response.statusText);
    }

    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data)
    document.querySelector("h1").textContent = data.name;
} catch (error) {
    console.log(error);
}

function insertCard() {
    data.cards.forEach((pokemon) => DOMSelectors.cards.insertAdjacentHTML("beforeend", 
    `<div class="card" id="all">
    <h2 class = "text">${pokemon.name}</h2>
    <img src=${pokemon.image} alt="" class="card-img">
    <h2 class = "info"> type: ${pokemon.type}</h2>
  </div>
    `)
    );
  }


// function insertCard () {
//     data.pokemons.forEach () => DOMSelectors.cards.insertAdjacentHTML("beforeend"
//     `<div class="card" id="all">
//   <h2 class = "text">${pokemon.name}</h2>
//   <img src=${pokemon.image} alt="" class="card-img">
//   <h2 class = "info"> type: ${pokemon.type}</h2>
// </div>`
//     );
// }



// }
// },
// "stats": [
//     {
//         "base_stat": 39,
//         "effort": 0,
//         "stat": {
//             "name": "hp",
//             "url": "https://pokeapi.co/api/v2/stat/1/"
//         }
//     },
//     {
//         "base_stat": 52,
//         "effort": 0,
//         "stat": {
//             "name": "attack",
//             "url": "https://pokeapi.co/api/v2/stat/2/"
//         }
//     },
//     {
//         "base_stat": 43,
//         "effort": 0,
//         "stat": {
//             "name": "defense",
//             "url": "https://pokeapi.co/api/v2/stat/3/"
//         }
//     },
//     {
//         "base_stat": 60,
//         "effort": 0,
//         "stat": {
//             "name": "special-attack",
//             "url": "https://pokeapi.co/api/v2/stat/4/"
//         }
//     },
//     {
//         "base_stat": 50,
//         "effort": 0,
//         "stat": {
//             "name": "special-defense",
//             "url": "https://pokeapi.co/api/v2/stat/5/"
//         }
//     },
//     {
//         "base_stat": 65,
//         "effort": 1,
//         "stat": {
//             "name": "speed",
//             "url": "https://pokeapi.co/api/v2/stat/6/"
//         }
//     }
// ],
// "types": [
//     {
//         "slot": 1,
//         "type": {
//             "name": "fire",
//             "url": "https://pokeapi.co/api/v2/type/10/"