const API_BASE = "";

async function manejarRespuesta(response) {
    if (response.status === 404) {
        const texto = await response.text();
        throw new Error(texto || "Recurso no encontrado (404)");
    }
    if (!response.ok) {
        const texto = await response.text();
        throw new Error(texto || `Error inesperado (${response.status})`);
    }
    if (response.status === 204) {
        return null;
    }
    return response.json();
}

function mostrarFeedback(idElemento, mensaje, esError) {
    const elemento = document.getElementById(idElemento);
    elemento.textContent = mensaje;
    elemento.setAttribute("data-status", esError ? "error" : "ok");
}

// --- Categoria ---

document.getElementById("form-categoria").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("categoria-nombre").value.trim();

    try {
        const categoriaCreada = await manejarRespuesta(await fetch(`${API_BASE}/categorias`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre })
        }));
        mostrarFeedback("feedback-categoria", `Categoria creada con id ${categoriaCreada.idCategoria}`, false);
        document.getElementById("form-categoria").reset();
    } catch (error) {
        mostrarFeedback("feedback-categoria", error.message, true);
    }
});

// --- Proveedor ---

document.getElementById("form-proveedor").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("proveedor-nombre").value.trim();
    const nit = document.getElementById("proveedor-nit").value.trim();

    try {
        const proveedorCreado = await manejarRespuesta(await fetch(`${API_BASE}/proveedores`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre, nit: nit })
        }));
        mostrarFeedback("feedback-proveedor", `Proveedor creado con id ${proveedorCreado.idProveedor}`, false);
        document.getElementById("form-proveedor").reset();
    } catch (error) {
        mostrarFeedback("feedback-proveedor", error.message, true);
    }
});

// --- Medicamento ---

document.getElementById("form-medicamento").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const nombre = document.getElementById("medicamento-nombre").value.trim();
    const precio = document.getElementById("medicamento-precio").value;
    const stock = document.getElementById("medicamento-stock").value;

    try {
        const medicamentoCreado = await manejarRespuesta(await fetch(`${API_BASE}/medicamentos`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ nombre: nombre, precio: Number(precio), stock: Number(stock) })
        }));
        mostrarFeedback("feedback-medicamento", `Medicamento creado con id ${medicamentoCreado.idMedicamento}`, false);
        document.getElementById("form-medicamento").reset();
        cargarMedicamentos();
    } catch (error) {
        mostrarFeedback("feedback-medicamento", error.message, true);
    }
});

// --- Asignar categoria a medicamento ---

document.getElementById("form-asignar-categoria").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const idMedicamento = document.getElementById("ac-id-medicamento").value;
    const idCategoria = document.getElementById("ac-id-categoria").value;

    try {
        await manejarRespuesta(await fetch(`${API_BASE}/medicamentos/${idMedicamento}/categoria/${idCategoria}`, {
            method: "PUT"
        }));
        mostrarFeedback("feedback-asociar", `Categoria ${idCategoria} asignada al medicamento ${idMedicamento}`, false);
        cargarMedicamentos();
    } catch (error) {
        mostrarFeedback("feedback-asociar", error.message, true);
    }
});

// --- Asignar proveedor a medicamento ---

document.getElementById("form-asignar-proveedor").addEventListener("submit", async (evento) => {
    evento.preventDefault();
    const idMedicamento = document.getElementById("ap-id-medicamento").value;
    const idProveedor = document.getElementById("ap-id-proveedor").value;

    try {
        await manejarRespuesta(await fetch(`${API_BASE}/medicamentos/${idMedicamento}/proveedores/${idProveedor}`, {
            method: "PUT"
        }));
        mostrarFeedback("feedback-asociar", `Proveedor ${idProveedor} asignado al medicamento ${idMedicamento}`, false);
        cargarMedicamentos();
    } catch (error) {
        mostrarFeedback("feedback-asociar", error.message, true);
    }
});

// --- Listado / filtro ---

function renderizarMedicamentos(medicamentos) {
    const cuerpoTabla = document.getElementById("tabla-medicamentos-body");
    const tablaVacia = document.getElementById("tabla-vacia");
    cuerpoTabla.innerHTML = "";

    if (!medicamentos || medicamentos.length === 0) {
        tablaVacia.hidden = false;
        return;
    }
    tablaVacia.hidden = true;

    medicamentos.forEach((medicamento) => {
        const fila = document.createElement("tr");

        const categoriaTexto = medicamento.categoria
            ? `<span class="chip">${medicamento.categoria.nombre}</span>`
            : `<span class="chip chip--vacio">Sin categoria</span>`;

        const proveedoresTexto = (medicamento.proveedores && medicamento.proveedores.length > 0)
            ? medicamento.proveedores.map((proveedor) => `<span class="chip">${proveedor.nombre}</span>`).join("")
            : `<span class="chip chip--vacio">Sin proveedores</span>`;

        fila.innerHTML = `
            <td>${medicamento.idMedicamento}</td>
            <td>${medicamento.nombre}</td>
            <td>$${Number(medicamento.precio).toLocaleString("es-CO")}</td>
            <td>${medicamento.stock}</td>
            <td>${categoriaTexto}</td>
            <td>${proveedoresTexto}</td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

async function cargarMedicamentos() {
    try {
        const medicamentos = await manejarRespuesta(await fetch(`${API_BASE}/medicamentos`));
        renderizarMedicamentos(medicamentos);
    } catch (error) {
        mostrarFeedback("feedback-asociar", error.message, true);
    }
}

document.getElementById("btn-filtrar").addEventListener("click", async () => {
    const idCategoria = document.getElementById("filtro-categoria").value;
    if (!idCategoria) {
        return;
    }
    try {
        const medicamentos = await manejarRespuesta(await fetch(`${API_BASE}/categorias/${idCategoria}/medicamentos`));
        renderizarMedicamentos(medicamentos);
    } catch (error) {
        mostrarFeedback("feedback-asociar", error.message, true);
    }
});

document.getElementById("btn-ver-todos").addEventListener("click", () => {
    document.getElementById("filtro-categoria").value = "";
    cargarMedicamentos();
});

cargarMedicamentos();