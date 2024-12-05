const formEl = document.querySelector(".form");
const inputEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list"));

list.forEach(task => {
    toDoList(task);
});

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    toDoList();
});

function toDoList(task) {
    let newtask = inputEl.value;
    if(task) {
        newtask = task.name;
    }

    const liEl = document.createElement("li");

    if(task && task.checked){
        liEl.classList.add("checked");
    }

    liEl.innerText = newtask;
    ulEl.appendChild(liEl);
    inputEl.value = "";

    const checkBtn = document.createElement("div");
    checkBtn.innerHTML = `<i class="fas fa-check-square"></i>`
    liEl.appendChild(checkBtn);
    const trashBtn = document.createElement("div");
    trashBtn.innerHTML = `<i class="fas fa-trash"></i>`;
    liEl.appendChild(trashBtn);

    checkBtn.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateStorage();
    })

    trashBtn.addEventListener("click", () => {
        liEl.remove();
        updateStorage();
    })
    updateStorage();
}

function updateStorage() {
    const liEls = document.querySelectorAll("li");
    list = [];
    liEls.forEach(liEL => {
        list.push({
            name: liEL.innerText,
            checked: liEL.classList.contains("checked"),
        });
    })
    localStorage.setItem("list", JSON.stringify(list));
}