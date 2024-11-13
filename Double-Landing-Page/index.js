const containerEl = document.querySelector(".container") ;
const rightEL = document.querySelector(".right") ;
const leftEl = document.querySelector (".left") ;


leftEl.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-left")
})

leftEl.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-left")
})

rightEL.addEventListener("mouseenter", () => {
    containerEl.classList.add("active-right")
})


rightEL.addEventListener("mouseleave", () => {
    containerEl.classList.remove("active-right")
})