const btnEl = document.querySelector(".btn");
const containerEl = document.querySelector(".trailer-container");
const closeEl = document.querySelector(".close-icon");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    
});

closeEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
}) ;