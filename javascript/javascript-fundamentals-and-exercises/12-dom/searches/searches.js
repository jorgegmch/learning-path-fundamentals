// 1. getElementById
const miElemento = document.getElementById("miElemento");
miElemento.innerHTML = "Nuevo contenido para el elemento";

// 2. getElementsClassName()
const misClases = document.getElementsByClassName("miclase");

for(let i = 0; i < misClases.length; i++) {
    misClases[i].textContent = `Nuevo contenido para el div ${i + 1}`;
}

// 3. getElementByTagName()
let misDivs = document.getElementsByTagName("div");
for(let div of misDivs) {
    if (div.textContent.includes("div")) {
        let texto = div.innerHTML;
        texto = texto.replace("div", "<b>div</b>");
        div.innerHTML = texto;
    }
}

// querySelector() - recupera el primer Elemento con la clase o id que se está buscando
const primerDiv = document.querySelector(".miclase");
primerDiv.innerHTML = `<em>${primerDiv.innerHTML}</em>`;


// querySelectorAll() - recupera todos los elementos HTML que coincidan con un selector CSS especificado
misDivs = document.querySelectorAll(".miclase");
misDivs.forEach(element => {
    element.style.color = "tomato";
    element.style.fontSize = "1.2em";
});



