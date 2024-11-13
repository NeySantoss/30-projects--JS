const containerEl = document.getElementById("container-el");


for (let index = 0; index < 30; index++) {
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container")
    containerEl.appendChild(colorContainerEl);    
}

const colorContainerEls = document.querySelectorAll(".color-container");

generateColor();
function generateColor(){
    colorContainerEls.forEach((colorContainer) => {
        const newColor = randomColor();
        colorContainer.style.backgroundColor = "#" + newColor;
        colorContainer.innerText = "#" + newColor;
    })
}

function randomColor() {
    const chars = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";

    for (let index = 0 ; index < colorCodeLength; index++) {
        const randomNumber = Math.floor(Math.random() * chars.length)
        colorCode += chars.substring(randomNumber, randomNumber + 1)        
    }

    return colorCode;
}