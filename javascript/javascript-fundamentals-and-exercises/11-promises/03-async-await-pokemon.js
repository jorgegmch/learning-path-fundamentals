const inputNombre = document.getElementById("nombrepoke");
const nombreDisplay = document.getElementById("nombrepokemon");
const imagenDisplay = document.getElementById("imgpokemon");

async function consultar() {
    //if (event) event.preventDefault();
    nombreDisplay.textContent = "";
    imagenDisplay.innerHTML = `<img src="" alt="" >`;
    const nomPoke = inputNombre.value.toLowerCase().trim();
    const url = `https://pokeapi.co/api/v2/pokemon/${nomPoke}`;

    nombreDisplay.textContent = "Buscando Pokemon...";

    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error. Pokemon ${nomPoke} no encontrado`);
        }

        const datos = await respuesta.json();
        nombreDisplay.textContent = datos.name[0].toUpperCase() + datos.name.slice(1);
                const rutaImg = datos.sprites.front_default;
                imagenDisplay.innerHTML = `<img src="${rutaImg}" alt="${datos.name}" >`;
    } catch (error) {
        nombreDisplay.textContent = error.message + "... Lo sentimos, estamos trabajando para mejorar nuestro servicio.";
    }
}