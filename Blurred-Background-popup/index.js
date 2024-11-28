const btnJoinEl = document.getElementById("btn-join");
const containerEl  = document.querySelector(".container");
const popContainerEl = document.querySelector(".popup-container");
const closeEl = document.querySelector(".close-icon");
 

btnJoinEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popContainerEl.classList.remove("active");
})

closeEl.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popContainerEl.classList.add("active");
})