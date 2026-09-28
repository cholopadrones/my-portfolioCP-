const contactButton = document.querySelector(".secondary-button");

contactButton.addEventListener("click", function () {
    alert("You can contact me through the email or GitHub links below.");
});


const backToTop = document.createElement("button");

backToTop.textContent = "↑ Top";
backToTop.classList.add("back-to-top");

document.body.appendChild(backToTop);


window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        backToTop.style.opacity = "1";
        backToTop.style.pointerEvents = "auto";
    } else {
        backToTop.style.opacity = "0";
        backToTop.style.pointerEvents = "none";
    }
});


backToTop.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});