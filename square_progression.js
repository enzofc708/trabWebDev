let slider = document.getElementById("ratioSlider");
let Nslider = document.getElementById("NSlider");
let sliderValue = document.getElementById("ratioValue");
let NValue = document.getElementById("NValue");
sliderValue.innerHTML = slider.value;
NValue.innerHTML = Nslider.value;
let desenho = document.getElementById("desenho");

let update = () => {
    desenho.innerHTML = "";
    let finalSvg;
    const colors = ["red", "yellow", "blue", "green"];
    const angle = +slider.value * Math.PI / 2;
    for (let i = 0; i < +Nslider.value; i++) {
        let g = document.createElement("g");
        g.setAttribute("transform", `translate(80,0) rotate(${angle}) scale(${1/(Math.acos(angle))})`);        
        
        let rect = document.createElement("rect");
        rect.setAttribute("fill", colors[i % colors.length]);
        rect.setAttribute("x", "0");
        rect.setAttribute("y", "0");
        rect.setAttribute("width", "80");
        rect.setAttribute("height", "80");
        rect.setAttribute("opacity", "0.7");
        
        g.appendChild(rect);
        finalSvg == null ? finalSvg : g.appendChild(finalSvg);
        finalSvg = g;
    }
    let finalG = document.createElement("g");
    finalG.setAttribute("transform", "translate(400, 300)");
    finalG.appendChild(finalSvg);
    desenho.appendChild(finalG);
};

update();

slider.oninput = () => {
    sliderValue.innerHTML = slider.value;
    update();
};

Nslider.oninput = () => {
    NValue.innerHTML = Nslider.value;
    update();
};