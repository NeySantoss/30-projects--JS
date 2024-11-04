const monthNameEl = document.getElementById("month");
const dayNameEl = document.getElementById("dayName");
const dayEl = document.getElementById("day");
const yearEl = document.getElementById("year");


const date = new Date();
const month = date.getMonth();


monthNameEl.innerText = date.toLocaleString("en", {
    month: "long"
})

dayNameEl.innerText = date.toLocaleString("en", {
    weekday: "long"
})


dayEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();
