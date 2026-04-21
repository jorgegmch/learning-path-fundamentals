function crearMatrices(fils, cols) {
    let matriz = [];
    for (let i = 0; i < fils; i++) {
        matriz[i] = new Array(cols);
    }
    return matriz;
}

function printMatriz() {
    for(let fila of matriz) {
        let f = "";
        for(let dato of fila) {
            f += dato + "\t";
        }
        console.log(f);
    }
}

function llenarMatrizRandom(matriz) {
    for(let fila of matriz) {
        for (let i = 0; i < fila.length; i++) {
            fila[i] = Math.floor(Math.random() * 100) + 1;
        }
    }
}

let matriz = crearMatrices(20, 8);
llenarMatrizRandom(matriz);
printMatriz(matriz);