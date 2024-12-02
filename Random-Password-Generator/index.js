const btnEl = document.getElementById("btn");
const inputEl = document.getElementById("input");
const CopyIconEl = document.querySelector(".fa-copy");
const alertcContainerEl = document.querySelector(".alert-container");


btnEl.addEventListener("click", () => {
    createPassword();
});

CopyIconEl. addEventListener("click", () => {
    copyPassword();
    if(inputEl.value){
        alertcContainerEl.classList.remove("active");
        setTimeout(() => {
            alertcContainerEl.classList.add("active");
        }, 2000)
    }    
});


function copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0, 999);
    navigator.clipboard.writeText(inputEl.value);
    alertcContainerEl.innerText = "Password copied!";
}


function createPassword() {
    const chars = 
    "0123456789abcdefghijklmnopqrstuvwxtz!@#$%^&*()_+?:{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const passwordLength = 10;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNum = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNum, randomNum +1);        
    }
    inputEl.value = password;    
}

