const billInputEl = document.getElementById("bill");
const tipInputEl = document.getElementById("tip");
const btnEl = document.getElementById("calculate");
const totalEl = document.getElementById("total");


function calculateTotal(){
    const billValue = billInputEl.value;
    const tipValue = tipInputEl.value;

    const totalValue = billValue * (1 + tipValue / 100);

    totalEl.innerText = totalValue.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal);
