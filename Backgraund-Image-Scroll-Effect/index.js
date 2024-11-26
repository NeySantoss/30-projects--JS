const bgEmageEl = document.getElementById("bg-image");


window.addEventListener("scroll", () => {
    updateImage();
})



function updateImage(){
    bgEmageEl.style.opacity = 1 - window.pageYOffset / 900;

    bgEmageEl.style.backgroundSize = 160 - window.pageXOffset  / 12 + "%";
}