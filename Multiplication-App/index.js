const formEl = document.getElementById("form");
const scoreEl  = document.getElementById("score");
const inputEl  = document.getElementById("input");
const questionEl = document.getElementById("question");
const submitEl = document.getElementById("submit");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));

if( !score ){
    score = 0
}

scoreEl.innerText = `score ${score}`;
questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

const corretAnswer = num1 * num2;

formEl.addEventListener("submit", () => {
    const userAnswer = +inputEl.value;

    if ( userAnswer === corretAnswer) {
        score++;
        updatelocalStorage();        
    }else {
        score--;
        updatelocalStorage();
    }
})

function updatelocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}