const API_URL = "http://localhost:3000/campers";

// METODO GET
export async function obtenerTodosCampers() {
    try {
        console.log("GET: obtener todos los campers");

        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error(
                "ERROR GET: ",
                respuesta.status,
                respuesta.statusText
            );
        }

        const campers = await respuesta.json();
        return campers;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

// POST
export async function createCamper(camper) {
    try {
        const respuesta = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(camper),
        });

        if (!respuesta.ok) {
            throw new Error("Error al crear campers. " + respuesta.status);
        }

        const camperCreado = await respuesta.json();
        console.table(camperCreado);

        return camperCreado;
    } catch (error) {
        console.error("Error al crear un camper", error);
        throw error;
    }
}

export async function eliminarCamperPorId(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        });

        if (!respuesta) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        return true;
    } catch (error) {
        throw error;
    }
}