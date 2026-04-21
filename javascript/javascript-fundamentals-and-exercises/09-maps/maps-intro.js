// Es una estructura con llave-valor

const articulos = new Map();
articulos.set("aguacate", 3000).set("banano", 700);

// Acceder al valor de una llave
console.log(articulos.get("banano"));

// Existencia de una llave
console.log(articulos.has("mora"));

// Borrar una llave
console.log(articulos.delete("banano"));

// Tamaño del mapa
console.log(articulos.size);

// Reccorerlo
for(let [k, v] of articulos) console.log(`${k} -> ${v}`);

articulos.forEach((k, v) => console.log(`${k} -> ${v}`));

// Posible solución al problema del lanzamiento de dados
const dados = new Map();

let dado1, dado2, result;
for (let i = 1; i <= 10_000_000; ++i) {
    dado1 = Math.floor(Math.random() * 6 +1);
    dado2 = Math.floor(Math.random() * 6 +1);
    result = dado1 + dado2;

    dados.set(result, (dados.get(result) ?? 0) + 1)
}

let mayor = 0, n;
for(let [num, veces] of dados.entries()) {
    if (veces > mayor) mayor = veces, n = num;
}

console.log(n);

console.log([...dados.entries()].reduce((a,b) => a[1] > b[1] ? a[0] : b)[0]);