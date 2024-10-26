const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales porttitor nisi, eget venenatis nulla lacinia sed. Quisque gravida consequat feugiat. Donec placerat tellus sit amet maximus convallis. Morbi neque risus, pretium in ultrices a, malesuada nec augue. Nunc aliquam lorem eros, vestibulum laoreet nibh venenatis sed. Morbi venenatis euismod felis, viverra lobortis lectus sodales interdum. Nunc cursus in felis a sollicitudin. Integer est elit, laoreet eget condimentum vel, maximus dapibus eros. Aenean euismod ultrices lorem, quis tristique arcu facilisis quis. Quisque nisi risus, scelerisque eget ultrices a, bibendum a urna. Praesent finibus aliquet fermentum. Maecenas consectetur tincidunt est condimentum ornare. Vivamus pellentesque nisl sit amet diam ornare dictum. Fusce id turpis pulvinar eros tempus auctor.";

var list_paragrafo = [];
var list_paragrafo_copia = [];

function cria() {
    let amount = document.getElementById("amount").value;
    var container_1 = document.getElementById("container-1");

    for (let count = 0; count < amount; count++) {
        list_paragrafo.push(text);
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = text;
        paragrafo.setAttribute("draggable", "true");
        paragrafo.addEventListener("dragstart", dragStart);
        paragrafo.addEventListener("dragend", dragEnd);
        container_1.append(paragrafo);
    }
}

function copia() {
    var container_2 = document.getElementById("container-2");

    for (let count = 0; count < list_paragrafo.length; count++) {
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = list_paragrafo[count];
        container_2.append(paragrafo);
    }

    // Limpa a lista original para permitir nova cópia
    list_paragrafo = [];
}

function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.innerHTML);
    event.target.style.opacity = "0.5"; // Diminui a opacidade do parágrafo sendo arrastado
}

function dragEnd(event) {
    event.target.style.opacity = ""; // Restaura a opacidade após o arraste
}

function allowDrop(event) {
    event.preventDefault(); // Permite o drop
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = data;
    paragrafo.setAttribute("draggable", "true");
    paragrafo.addEventListener("dragstart", dragStart);
    paragrafo.addEventListener("dragend", dragEnd);
    event.target.append(paragrafo);
}

// Adiciona os eventos de arrastar e soltar
document.getElementById("container-1").addEventListener("dragover", allowDrop);
document.getElementById("container-2").addEventListener("dragover", allowDrop);
document.getElementById("container-2").addEventListener("drop", drop);
