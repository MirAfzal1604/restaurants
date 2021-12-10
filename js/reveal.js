window.addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (i = 0; i < reveals.length; i++) {
        const windowinner = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealpoint = 100;

        if (revealTop < windowinner - revealpoint) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", revealReverse);

function revealReverse() {
    const revealsReverse = document.querySelectorAll(".revealReverse");

    for (i = 0; i < revealsReverse.length; i++) {
        const windowinner = window.innerHeight;
        const revealReverseTop = revealsReverse[i].getBoundingClientRect().top;
        const revealReversepoint = 100;

        if (revealReverseTop < windowinner - revealReversepoint) {
            revealsReverse[i].classList.add("active");
        }
    }
}


window.addEventListener("scroll", revealReverseMinusY);

function revealReverseMinusY() {
    const revealsReverseY = document.querySelectorAll(".revealReverseMinusY");

    for (i = 0; i < revealsReverseY.length; i++) {
        const windowinner = window.innerHeight;
        const revealReverseTopY = revealsReverseY[i].getBoundingClientRect().top;
        const revealReversepointY = 100;

        if (revealReverseTopY < windowinner - revealReversepointY) {
            revealsReverseY[i].classList.add("active");
        }
    }
}