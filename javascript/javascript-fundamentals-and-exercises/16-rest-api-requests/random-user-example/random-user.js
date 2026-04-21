const apiUrl = "https://randomuser.me/api/?results=4";

async function getUsuarios() {
    try {
        const respuesta = await fetch(apiUrl);
        const data = await respuesta.json();

        console.table(data.results);

        const usuarios = data.results;
        const usuContainer = document.querySelector(".user-container");

        usuarios.forEach((usu) => {
            const cajaUsu = crearTarjetaUsuario(usu);
            usuContainer.appendChild(cajaUsu);
        });
    } catch (error) {
        console.error("Error al obtener los usuarios. " + error);
    }
}

function crearTarjetaUsuario(usu) {
    const { title, nombre, apellido } = usu.name;
    const { genero, email, tel } = usu;
    const img = usu.picture.large;
    const age = usu.dob.age;
    const { ciudad, estado, pais } = usu.location;
    const nombreFull = `${title} ${nombre} ${apellido}`;

    const cajaUsu = document.createElement("div");
    cajaUsu.classList.add("user-box");

    const range = document.createRange();
    const frag = range.createContextualFragment(`
        <h2>${nombreFull}</h2>
        <img src="${img}" alt="${nombreFull}">
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Teléfono:</strong> <a href="tel:${tel}">${tel}</a></p>
        <p><strong>Edad:</strong> ${age}</p>
        <p><strong>Género:</strong> ${genero}</p>
        <p><strong>Ubicación:</strong> ${ciudad}, ${estado}</p>
        <p><strong>País:</strong> ${pais}</p>
        `);
    cajaUsu.appendChild(frag);

    return cajaUsu;
}

getUsuarios();