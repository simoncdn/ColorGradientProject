let labelColors = [...document.querySelectorAll(".input-group label")];
let inputColor1 = document.getElementById("color1");
let inputColor2 = document.getElementById("color2");
let labelOrientation = document.querySelector(".orientation-value");
let inputOrientation = document.getElementById("orientation");
let body = document.querySelector("body");
let copy = document.querySelector(".copy-btn");
let randomInput = document.querySelector(".random-btn");

function ParamsInit(){
    color1 = "#FF5F6D";
    color2 = "#FFC371";
    orientationBtn = "90";
    body.style.background = `linear-gradient(${orientationBtn}deg, ${color1}, ${color2})`
    labelColors[0].style.backgroundColor = color1;
    labelColors[1].style.backgroundColor = color2;
}
ParamsInit();

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
function CopyColor(){
    copy.addEventListener("click", (e) => {
        e.preventDefault();
        let colorCode = [];
        colorCode = [`${orientationBtn}deg, ${color1}, ${color2}`];
        navigator.clipboard.writeText(colorCode);
    })
}
function Random(){

    randomInput.addEventListener("click", (e) => {
        e.preventDefault();
        color1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        labelColors[0].innerHTML = color1;
        labelColors[0].style.backgroundColor = color1;
        color2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        labelColors[1].innerHTML = color2;
        labelColors[1].style.backgroundColor = color2;
        body.style.background = `linear-gradient(${orientationBtn}deg, ${color1}, ${color2})`;
        adaptInputsColor();
    })
}
function adaptInputsColor(){
    labelColors.forEach(label => {
      const hexColor = label.textContent.replace("#", "");
      const red = parseInt(hexColor.slice(0,2), 16)
      const green = parseInt(hexColor.slice(2,4), 16)
      const blue = parseInt(hexColor.slice(4,6), 16)
  
      const yiq = (red * 299 + green * 587 + blue * 144) / 1000;
   
      if(yiq >= 128) {
        label.style.color = "#111"
      }
      else {
        label.style.color = "#f1f1f1"
      }
    })
}
  
function GradientBackground(){
    body.addEventListener("input", (e) => {
        input1(inputColor1);
        input2(inputColor2);
        Orientation(inputOrientation);
        body.style.background = `linear-gradient(${orientationBtn}deg, ${color1}, ${color2})`;
        adaptInputsColor();

    });
    CopyColor();
    Random();
}
GradientBackground();

