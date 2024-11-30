const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apiKey = "uly7MnusxgexC856S/puZg==OVjx2UnhAg1D3QIG";

const options = {
    method: 'GET',
    headers: { 'X-Api-Key': apiKey},   
};

const apiURL = 'https://api.api-ninjas.com/v1/dadjokes'


async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disable = true;
        btnEl.innerText = "Loading...";
        
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
    
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = 'An error happened, try again later!';
        btnEl.disable = false;
        btnEl.innerText = "Tell me a joke";
    }      
}

btnEl.addEventListener("click", getJoke);

