"use static"

window.onscroll = function() {
    scrolldown();
    animationNav();
};

const mybutton = document.getElementById("myBtn");
const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll(".nav_links .li a");

function scrolldown() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 300) {
        document.getElementById("nav").className = "scrollDown";
        mybutton.style.display = "block";
    } else {
        document.getElementById("nav").className = "";
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function animationNav() {
    var current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 180) {
            current = section.getAttribute("id");
        }
    });

    navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
}