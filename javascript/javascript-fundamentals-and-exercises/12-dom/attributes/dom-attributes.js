//1. getAtrribute()
const enlace = document.getElementById("miEnlace");

const url = enlace.getAttribute("href");
console.log("URL: " + url);

// 2. setAttribute()
enlace.setAttribute("href", "https://campuslands.com/")

// 3.getAttributeNames() - recupera todos los nombres de atributos de un elemento dentro de una lista

console.log("Nombres de atributos", enlace.getAttributeNames());

// toggleAttribute()
// sintaxis: elemento.toggleAttribute ("atributo", force); force:true agrega | force:false elimina | force:none alterna
function alternarEnlace() {
    enlace.toggleAttribute("hidden");
    
    //document.getElementsByTagName("button")[0].textContent = enlace.hasAttribute("hidden") ? "Mostrar" : "Ocultar";

    if (enlace.hasAttribute("hidden")) {
        document.getElementsByTagName("button")[0].textContent = "Mostrar";
    } else {
        document.getElementsByTagName("button")[0].textContent = "ocultar";
    }

// 4. removeAttribute()
    enlace.removeAttribute("target")
}

