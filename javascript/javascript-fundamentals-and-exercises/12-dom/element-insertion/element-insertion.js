// 1. appendChild() - inserta un elemento nuevo como hijos
const miDiv = document.querySelector(".parent");

const parrafo = document.createElement("p");
parrafo.textContent = "Hoy es viernes :D";
miDiv.appendChild(parrafo);

const parrafo2 = document.createElement("p");
parrafo2.textContent = "Pidan tutorias =)";
miDiv.insertBefore(parrafo2, miDiv.firstChild);

// 2. removeChild()
const parrHola = document.querySelector(".parent > p ~ p");
miDiv.removeChild(parrHola);

// 3. replaceChild(new, old)
const parrMensaje = document.querySelector(".message");
const parrNuevo = document.createElement("p")
parrHola.innerHTML = "<p><b><em>Mi nombre es Maximus tercero meridium</em></b></p>";
miDiv.replaceChild(parrNuevo, parrMensaje);

// 4. insertBefore(new, node) - inserta un elemento nuevo antes de otro elemento. El elemento nuevo se agrega a la lista de hijos del elemento anterior
const miBoton = document.createElement("button");
miBoton.textContent = "Conquistas JavaScript";
miDiv.insertBefore(miBoton, miDiv.firstChild);

// 5. before() after() prepend() append() - before : antes del container / after : despues del container / prepend : dentro y al inicio del container / append : dentro y al final del container
const container = document.querySelector(".container");
const lineaNueva = document.createElement("hr");
container.before(lineaNueva);
const lineaNueva2 = document.createElement("hr");
container.after(lineaNueva2);

// 6. replaceChildren() - remplaza TODOS los hijos de un elemento por otro
function reemplazarHijos() {
    container.replaceChildren(parrNuevo);
}

// 7. replaceWith() - reemplaza todo un elemento por otro
function reemplazarContainer() {
    const pVelitas = document.createElement("p");
    pVelitas.textContent = "\u{1F382}\u{1F956}\u{1F38A} FELIZ NOCHE DE VELITAS \u{1F56F}\u{2728}";
    container.replaceWith(pVelitas);
}