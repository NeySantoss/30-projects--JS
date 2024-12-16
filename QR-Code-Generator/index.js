const qrContainerEl = document.querySelector(".qr-container");
const qrTextInputEl = document.querySelector(".qr-text");
const generateBtnEl = document.querySelector(".generate-btn");
const errorMsgEl = document.querySelector(".error-message");

generateBtnEl.addEventListener("click", () => {
    validateInputField();
});

function validateInputField() {   
    if(qrTextInputEl.value.trim().length > 0){
        generateQrCode();
    } else {
        errorMsgEl.textContent = "Enter text and use some URL to generate QR Code."
    }
};

function generateQrCode() {
    qrContainerEl.innerHTML = "";
    new QRCode(qrContainerEl, {
        text : qrTextInputEl.value,
        height : 250,
        width : 250,
        colorLight : "#FFF",
        colorDark : "#000",
    });

    qrTextInputEl.value = "";
    errorMsgEl.textContent = "";
};