const darkModeEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");

darkModeEl.checked = JSON.parse(localStorage.getItem("mode"));

function upDateBody() {
    if( darkModeEl.checked){
        bodyEl.style.backgroundColor = "#000"
    }else {
        bodyEl.style.backgroundColor = "#FFF"
    }
}

darkModeEl.addEventListener("input", () => {    
    upDateBody();
    upDateLocalStorage();
})

function upDateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(darkModeEl.checked))
}
 