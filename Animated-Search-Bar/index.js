const searchContainerEl = document.querySelector(".search-container");
const magnifierEl = document.querySelector(".magnifier");

magnifierEl.addEventListener("click", () => {
    searchContainerEl.classList.toggle("active");
    
})

