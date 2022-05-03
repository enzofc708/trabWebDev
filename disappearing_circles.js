const colors = ["red", "blue", "yellow", "green"];
let circleCount = 0;

let createWelcomeMessage = function(){
    let body = document.body;
    let welcomeMsg = document.createTextNode("Disappearing Circles");
    let h1 = document.createElement("h1");
    h1.appendChild(welcomeMsg);
    body.appendChild(h1);
}

let createMainDiv = function(){
    let body = document.body;
    let div = document.createElement("div");
    div.setAttribute("id", "mainDiv");
    body.appendChild(div);
}

let createCircle = function () { //creates individual circle
    let mainDiv = document.getElementById("mainDiv");
    let div = document.createElement("div");
    div.setAttribute("id", `circle-${circleCount}`);
    
    div.style.width = "130px"
    div.style.height = "130px"
    div.style.borderRadius = "50%"
    div.style.float = "left"
    div.style.marginRight = "50px"
    div.style.backgroundColor = colors[circleCount++ % colors.length] //alternates between colors

    mainDiv.style.display = "flex"
    mainDiv.style.marginBottom = "50px"

    div.onclick = function(){
        div.style.display = "none";
        div.classList.add("deleted");
    }

    mainDiv.appendChild(div);
}

let showCircles = function(){
    let deleted = document.getElementsByClassName("deleted");
    [...deleted].forEach(element => {
        element.style.borderStyle = "dashed";
        element.style.display = "block";
        element.style.opacity = "0.7";

        element.classList.remove("deleted");
    });
}

let createButtons = function (){
    let body = document.body;

    let buttonDiv = document.createElement("div");
    buttonDiv.setAttribute("id", "buttonDiv");

    let buttonAdd = document.createElement("button");
    let buttonShow = document.createElement("button");

    let buttonAddText = document.createTextNode("Create New Circle");
    let buttonShowText = document.createTextNode("Show All Circles");

    buttonAdd.onclick = createCircle;
    buttonShow.onclick = showCircles;

    buttonAdd.appendChild(buttonAddText);
    buttonShow.appendChild(buttonShowText);

    buttonDiv.appendChild(buttonAdd);
    buttonDiv.appendChild(buttonShow);

    body.appendChild(buttonDiv);
}

window.onload = function () {
    createWelcomeMessage();

    createMainDiv();

    for (let index = 0; index < 3; index++) {
        createCircle();
    }

    createButtons();
}

window.onkeydown = function(event){
    if(event.key == " "){
        createCircle();
    }
};