// 1. classList.length

const miDiv = document.getElementById("miElemento");
console.log("Cantidad de clases del div: ", miDiv.classList.length);

// 2 classList y classList.value
console.log("Clases del div: ", miDiv.classList.value);

// 3. classList.item(n)
console.log("Segunda clase del div: ", miDiv.classList.item(1));

// 4. classList.contains - verifica si una clase está en la lista de clases
console.log("¿Está la clase 'clase3' en el div?: ", miDiv.classList.contains("clase3"));

// classList.Add
miDiv.classList.add("clase3");

// classList.remove
miDiv.classList.remove("clase2","clase1");

// classList.toggle() - Alterna la presencia de una clase en los atributos de un elemento. Si existe, borra la clase; si no existe, la crea
function toggleClass() {
    miDiv.classList.toggle("clase4");
    console.log(miDiv.classList);
}

// classList.replace(old, new)
miDiv.classList.replace("clase3", "clase5");



