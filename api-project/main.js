const URL = `https://pokeapi.co/api/v2/pokemon?limit=649&offset=0`;

async function getData(URL) {
    try {
        const response = await fetch(URL);
        if (response.status != 200) {
            throw new Error(response.statusText);
        }
        const get = await response.json();
        const arrData = get.results;

        console.log(get);

            function insertData() {
            arrData.forEach((pokemon) => document.querySelector(".cards").insertAdjacentHTML("beforeend",
            `
            <div class="card">
            <h2 class ="description">${pokemon.name}</h2>
            <img class ="image" src="${pokemon.url}" alt="${pokemon.name}"><br>
            </div>
            `
            ));
        }
        insertData();

    } catch (error) {
        console.log("error", error);
        document.querySelector(".cards").textContent = "gg u broke it";
    };
};
getData(URL);


