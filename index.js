const html = document.getElementById("html");

let imgRefs = ["sheriff.png", "sheriff2.png", "sheriff3.png", "sheriff4.png", "police.png", "police2.png", "firedept.png", "ems.png", "ems2.png"]
let counter = 0;
function setPageImg() {
    let index = Math.floor(Math.random() * 9);
    html.style.backgroundImage = `url(${imgRefs[index]})`;
}

setPageImg();