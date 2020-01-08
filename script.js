let css=document.querySelector("h3");
let input1=document.getElementById("color1");
let input2=document.getElementById("color2");
let body=document.getElementById("body");

function setGradient(){
    body.style.background="linear-gradient(to right, "
    +input1.value
    +", "
    +input2.value
    +" )";
    css.textContent=body.style.background+ ";";
}

color1.addEventListener("input",setGradient);
color2.addEventListener("input",setGradient);