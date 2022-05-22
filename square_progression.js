let slider = document.getElementById("ratioSlider");
let Nslider = document.getElementById("NSlider");
let sliderValue = document.getElementById("ratioValue");
let NValue = document.getElementById("NValue");
sliderValue.innerHTML = slider.value;
NValue.innerHTML = Nslider.value;
let desenhoDiv = d3.select("#divDesenho");

let update = () => {
    desenhoDiv.html("");
    const colors = ["red", "yellow", "blue", "green"];
    const angle = +slider.value * Math.PI / 2;
    let count = 1;
    desenhoDiv.append("svg")
           .attr("id", "desenho")
           .attr("width", 800)
           .attr("height", 600)
           .attr("style", "border:1px solid gray");

    let desenho = d3.select("#desenho");

    desenho.append("g")
           .attr("id", "g1")
           .attr("transform", "translate(400, 300)");
    for (let i = 0; i < +Nslider.value; i++) {
        let gAtualId = `#g${count++}`;
        let gAtual = d3.select(gAtualId);

        gAtual.append("rect")
              .attr("fill", colors[i % colors.length])
              .attr("x", "0")
              .attr("y", "0")
              .attr("width", "80")
              .attr("height", "80")
              .attr("opacity", "0.7");
        
        gAtual.append("g")
              .attr("id", `g${count}`)
              .attr("transform", `rotate(${90 * +slider.value}) scale(${1/(Math.acos(angle))})`);
    }
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