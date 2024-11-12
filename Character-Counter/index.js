const textAreaEl = document.getElementById("text-area");
const incrementEl = document.getElementById("increment-count");
const decrementEl = document.getElementById("decrement-count");


textAreaEl.addEventListener("keyup", () => {
    updateCount();
})

updateCount();

function updateCount() {
    incrementEl.innerText = textAreaEl.value.length ;
    decrementEl.innerText =  textAreaEl.getAttribute("maxlength") - textAreaEl.value.length
}