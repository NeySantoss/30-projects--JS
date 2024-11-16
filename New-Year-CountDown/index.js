const dayEl = document.getElementById("day");
const hourEL = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secundEl = document.getElementById("seconds");


const newYearTimee = new Date("Jan 1, 2025 00:00:00").getTime()

updateCountDown();
function updateCountDown() {
    const now = new Date().getTime();
    const gap = newYearTimee - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24

    const d = Math.floor(gap/day);
    const h = Math.floor((gap % day) / hour);
    const m = Math.floor((gap % hour) / minute) ;
    const s = Math.floor((gap % minute) / second);


    dayEl.innerText = d;
    hourEL.innerText = h;
    minuteEl.innerText = m;
    secundEl.innerText = s;

    setTimeout( () => {
        updateCountDown();
    }, 1000)
}