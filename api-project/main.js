import './style.css'

const URL = "https://pokeapi.co/api/v2/pokemon/" 
try {
    const response = await fetch (URL);
    const data = await response.json();
    document.getElementById("api-response").textContent = data.content;
} catch (error) {
    console.log(error);
}
getData (URL);