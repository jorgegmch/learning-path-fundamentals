// 1. textContent
const miDiv = document.getElementById("miElemento");

miDiv.textContent = "<b>Contenido modificado</b>";

// 2. innerHTML
miDiv.innerHTML = "<i>Contenido modificado</i>";

// 3. nodeName - devuelve el nombre del nodo como una cadena de texto. El nombre del nodo es el nombre de la etiqueta HTML
const elemMensaje = document.querySelector(".message");
console.log("Nombre del nodo: ", elemMensaje.nodoName);

// 4. outerText - es el contenido del nodo
console.log("Contenido del nodo:\n", elemMensaje.outerText);
console.log("Contenido del container:\n", document.querySelector(".container").outerText);

// 5. outerHTML
console.log("Contenido del nodo:\n", elemMensaje.outerHTML);
console.log("Contenido del container:\n", document.querySelector(".container").outerHTML);

// 6. setHTML - agrega de forma segura HTML a un elemento en el DOM
const htmlCode = "<b>Mi nombre es CampusLands</b>"
elemMensaje.setHTML(htmlCode);
