
// SIMULACIÓN DE LANZAMIENTO DE DADOS

/* 
- Simulación de dos dados de 1 a 6.
- Ejecución de millones de lanzamientos usando Math.random()
- Conteo de frecuencia de cada suma o combinación.
- Resultados mostrados en consola.
*/

const contador = {
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0
};

function lanzarDados() {
    return Math.floor(Math.random() * 6) + 1;
}

const repeticiones = 10_000_000;

for (let i = 0; i < repeticiones; i++) {
    const dado1 = lanzarDados();
    const dado2 = lanzarDados();
    const suma = dado1 + dado2;
    contador[suma]++;
}

let valor = 0;
let masFrecuentes = [];

for (let suma in contador) {
    const cantidad = contador[suma];

    if (cantidad > valor) {
        valor = cantidad;
        masFrecuentes = [suma];
    } else if (cantidad === valor) {
        masFrecuentes.push(suma);
    }
}

console.log("RESULTADO DEL LANZAMIENTO DE LOS DADOS");
console.log(contador);

console.log(`\nNÚMEROS QUE CAYERON MÁS VECES: ${masFrecuentes}`)
console.log(`El resultado más repetido cayó ${valor} veces`);
