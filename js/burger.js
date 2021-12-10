const navLink = document.querySelector(".burgeradd");
const burger = document.querySelector(".burger");

burger.addEventListener("click", show);

function show() {
    navLink.style.display = "block";
    navLink.style.top = "0";
}

function closeBurger() {
    navLink.style.top = "-100%";
}