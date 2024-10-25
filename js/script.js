text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sodales porttitor nisi, eget venenatis nulla lacinia sed. Quisque gravida consequat feugiat. Donec placerat tellus sit amet maximus convallis. Morbi neque risus, pretium in ultrices a, malesuada nec augue. Nunc aliquam lorem eros, vestibulum laoreet nibh venenatis sed. Morbi venenatis euismod felis, viverra lobortis lectus sodales interdum. Nunc cursus in felis a sollicitudin. Integer est elit, laoreet eget condimentum vel, maximus dapibus eros. Aenean euismod ultrices lorem, quis tristique arcu facilisis quis. Quisque nisi risus, scelerisque eget ultrices a, bibendum a urna. Praesent finibus aliquet fermentum. Maecenas consectetur tincidunt est condimentum ornare. Vivamus pellentesque nisl sit amet diam ornare dictum. Fusce id turpis pulvinar eros tempus auctor."

var list_paragrafo = []
var list_paragrafo_copia = []

function cria() {
    let amount = document.getElementById("amount").value;
    var container_1 = document.getElementById("container-1");

    for(let count = 0; count < amount; count++) {
        list_paragrafo.push(text);
    }

    for(let count = 0; count < amount; count++) {
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = list_paragrafo[count];
        container_1.append(paragrafo);
    }
}

function copia() {
    var container_2 = document.getElementById("container-2");
    container_2.innerHTML = ""
    document.getElementById("container-1").innerHTML = ``;

    for(let count = 0; count < list_paragrafo.length; count++) {
        list_paragrafo_copia.push(list_paragrafo[count]);
    }

    for(let count = 0; count < list_paragrafo_copia.length; count++) {
        var paragrafo = document.createElement("p");
        paragrafo.innerHTML = list_paragrafo_copia[count];
        container_2.append(paragrafo);
    }

    list_paragrafo = []
}
