const menuEl = document.querySelector(".menu");
const menuTextEl = document.querySelector(".menu p");
const socialLinkEl = document.querySelector(".social-links");
const liEls = document.querySelectorAll(".social-links li");

menuEl.addEventListener("click", () => {
    socialLinkEl.classList.toggle("hide");
    menuEl.classList.toggle("rotate");
});


liEls.forEach(liEl => {
    liEl.addEventListener("click", () => {
        menuTextEl.innerHTML = liEl.innerHTML;
        socialLinkEl.classList.add("hide");
        menuEl.classList.toggle("rotate");
    });
})
