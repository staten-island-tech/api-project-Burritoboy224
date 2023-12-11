import './style.css'

const URL = "https://pokeapi.co/api/v2/pokemon" 
try {
    const response = await fetch (URL);
    if (response.status !=200){
        throw new error(response.statusText);
    }

    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
    console.log(data)
} catch (error) {
    console.log(error);
}
