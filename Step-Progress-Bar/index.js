const nextEl = document.getElementById("next");
const prevEl = document.getElementById("prev");

const stepsEl = document.querySelectorAll(".step");
const progressBarEl = document.querySelector(".progress-bar-front");

let currentChecked = 1;

nextEl.addEventListener("click", () => {
    currentChecked++;
    if(currentChecked > stepsEl.length){
        currentChecked = stepsEl.length
    }
    updateStepProgress();
});

prevEl.addEventListener("click", () => {
    currentChecked--;
    if(currentChecked < 1){
        currentChecked = 1
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepsEl.forEach((stepEl, index) => {
        if(index < currentChecked){
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
                <i class="fas fa-check"></i>
                <small>${index === 0 ? "Start" : 
                    index === stepsEl.length - 1 ?
                    "Final" : "Step" + index
                }
                </small>
            `
        }else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
               <i class="fas fa-times"></i>
                
            `
        }
    });
    const checkedNumber = document.querySelectorAll(".checked")
    progressBarEl.style.width = ((checkedNumber.length  - 1) /
    (stepsEl.length  - 1)) * 100 +  "%";

    if(currentChecked === 1){
        prevEl.disabled = true;
    }else if(currentChecked === stepsEl.length) {
        nextEl.disabled = true;
    }else {
        prevEl.disabled = false;;
        nextEl.disabled = false;
    }                        

}
