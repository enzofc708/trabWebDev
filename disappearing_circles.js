const colors = ["red", "blue", "yellow", "green"];
let circleCount = 0;

let createWelcomeMessage = function(){
    let body = document.body;
    
}

let createCircle = function () { //creates individual circle
    let body = document.body;

    let div = document.createElement("div");
    div.setAttribute("id", `circle-${circleCount}`);
    
    div.style.width = "130px"
    div.style.height = "130px"
    div.style.borderRadius = "50%"
    div.style.float = "left"
    div.style.marginRight = "50px"
    div.style.backgroundColor = colors[circleCount++ % colors.length] //alternates between colors

    div.onclick = function(){
        div.style.display = "none";
    }

    body.appendChild(div);
}

window.onload = function () {
    for (let index = 0; index < 3; index++) {
        createCircle();
    }
}

window.onkeydown = function(event){
    if(event.key == " "){
        createCircle();
    }
};