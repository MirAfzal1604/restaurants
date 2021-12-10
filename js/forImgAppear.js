function onToggleImg(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "flex";
    const caption = document.querySelector("#caption");
    caption.textContent = element.alt;
}