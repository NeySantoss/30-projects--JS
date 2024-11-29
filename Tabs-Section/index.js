const tabsEl = document.querySelector(".tabs");
const btnEl = document.querySelectorAll(".btn");
const articles = document.querySelectorAll(".content");

tabsEl.addEventListener("click" , (event) => {

    const id = event.target.dataset.id;

    if(id) {
        btnEl.forEach((btn) => {
            btn.classList.remove("live");
        })
        event.target.classList.add("live");
        articles.forEach((article)=> {
            article.classList.remove("live");            
        })
        const element = document.getElementById(id);
        element.classList.add("live");
    }
})