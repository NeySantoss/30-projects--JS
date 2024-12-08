const fisrtCurrancyEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");

const secondCurrancyEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/af2bd13c3606a979133507aa/latest/${fisrtCurrancyEl.value}`)
    .then((res) => res.json())
    .then((data) => 
        { const rate = data.conversion_rates
            [secondCurrancyEl.value].toFixed(2);
            exchangeRateEl.innerText =`1 ${fisrtCurrancyEl.value} = ${(rate + " " + secondCurrancyEl.value)}`;
            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
    });
}

fisrtCurrancyEl.addEventListener("change", updateRate);
secondCurrancyEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
