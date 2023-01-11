const navlink = document.querySelector('.nav_links');
const open = document.querySelector('#nav_toggle-open');
const close = document.querySelector('#nav_toggle-close');

open.onclick = function () {
    navlink.style.transform = "scale(1)";
    open.style.display = "none";
    close.style.display = "block";

}
close.onclick = function () {
    navlink.style.transform = "scale(0)";
    close.style.display = "none";
    open.style.display = "block";
}



const body = document.querySelector("body");
// const closeBtn = document.querySelector(".closet");
// const welicumu = document.querySelector(".welicumu");

// body.onload = function () {
//     welicumu.style.display = "block";
//     body.style.overflow = "hidden";
// }
// // welicomu.style.transform = "scale(1)";
// closeBtn.onclick = function () {
//     welicumu.style.display = "none";
//     body.style.overflow = "scroll";
// }

var someText = document.querySelector(".playing")
if (someText.after === "Full-Stack Web Developer") {
    console.log("Okaty");
}