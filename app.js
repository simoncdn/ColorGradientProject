let labelColors = document.querySelectorAll(".input-group label");
let inputColor1 = document.getElementById("color1");
let inputColor2 = document.getElementById("color2");
let labelOrientation = document.querySelector(".orientation-value");
let inputOrientation = document.getElementById("orientation");
let body = document.querySelector("body");
let copy = document.querySelector(".copy-btn");

color1 = "#FF5F6D";
color2 = "#FFC371";
orientationBtn = "90";
body.style.background = `linear-gradient(${orientationBtn}deg, ${color1}, ${color2})`
labelColors[0].style.backgroundColor = color1;
labelColors[1].style.backgroundColor = color2;

function input1(inputColor1){
    inputColor1.addEventListener("input", (e) => {

        labelColors[0].style.backgroundColor = `${e.target.value}`;
        labelColors[0].innerHTML = `${e.target.value}`;
        color1 = e.target.value;
    })
}

function input2(inputColor2){
    inputColor2.addEventListener("input", (e) => {
        e.preventDefault();
        labelColors[1].style.backgroundColor = `${e.target.value}`;
        labelColors[1].innerHTML = `${e.target.value}`;
        return color2 = e.target.value;
    })
}
function Orientation(inputOrientation){
    inputOrientation.addEventListener("input", (e) => {
        labelOrientation.innerHTML = `${e.target.value}°` ;
        return orientationBtn = e.target.value;
    })
}

function GradientBackground(){
    body.addEventListener("input", (e) => {
        input1(inputColor1);
        input2(inputColor2);
        Orientation(inputOrientation);
        body.style.background = `linear-gradient(${orientationBtn}deg, ${color1}, ${color2})`;

    });
    CopyColor();
}
GradientBackground();

function CopyColor(){
    copy.addEventListener("click", (e) => {
        e.preventDefault();
        let colorCode = [];
        colorCode = [`${orientationBtn}deg, ${color1}, ${color2}`];
        colorCode.select();
        document.execCommand('copy');
    })
}