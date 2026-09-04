const API_URL = '/api/libros';

const form = document.getElementById('libroForm');
const libroIdInput = document.getElementById('libroId');
const tituloInput = document.getElementById('titulo');
const autorInput = document.getElementById('autor');
const isbnInput = document.getElementById('isbn');
const generoInput = document.getElementById('genero');
const ejemplaresInput = document.getElementById('ejemplaresDisponibles');

const formTitulo = document.getElementById('formTitulo');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const refreshBtn = document.getElementById('refreshBtn');
const tablaBody = document.getElementById('tablaBody');
const mensajeDiv = document.getElementById('mensaje');
const statusConexion = document.getElementById('statusConexion');

document.addEventListener('DOMContentLoaded', cargarLibros);
form.addEventListener('submit', manejarSubmit);
cancelBtn.addEventListener('click', resetearFormulario);
refreshBtn.addEventListener('click', cargarLibros);

async function cargarLibros() {
    tablaBody.innerHTML = '<tr><td colspan="7" class="cargando">CARGANDO_DATOS...</td></tr>';

    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error('La API respondió con estado ' + respuesta.status);
        }

        const libros = await respuesta.json();
        marcarConexion(true);
        renderizarTabla(libros);
    } catch (error) {
        marcarConexion(false);
        tablaBody.innerHTML = '<tr><td colspan="7" class="cargando">ERROR::NO_SE_PUDO_CONECTAR_A_LA_API</td></tr>';
        console.error('Error al cargar libros:', error);
    }
}

function renderizarTabla(libros) {
    if (!libros || libros.length === 0) {
        tablaBody.innerHTML = '<tr><td colspan="7" class="cargando">SIN_REGISTROS</td></tr>';
        return;
    }

    tablaBody.innerHTML = '';

    libros.forEach(libro => {
        const fila = document.createElement('tr');

        fila.innerHTML = `
            <td>${libro.id}</td>
            <td>${escaparTexto(libro.titulo)}</td>
            <td>${escaparTexto(libro.autor)}</td>
            <td>${escaparTexto(libro.isbn)}</td>
            <td>${escaparTexto(libro.genero)}</td>
            <td>${libro.ejemplaresDisponibles}</td>
            <td class="acciones-cell">
                <button class="btn-mini btn-edit" data-id="${libro.id}">EDIT</button>
                <button class="btn-mini btn-delete" data-id="${libro.id}">DEL</button>
            </td>
        `;

        tablaBody.appendChild(fila);
    });

    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', () => cargarLibroEnFormulario(btn.dataset.id));
    });

    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', () => eliminarLibro(btn.dataset.id));
    });
}

async function cargarLibroEnFormulario(id) {
    try {
        const respuesta = await fetch(`${API_URL}/${id}`);

        if (!respuesta.ok) {
            throw new Error('No se pudo obtener el libro con id ' + id);
        }

        const libro = await respuesta.json();

        libroIdInput.value = libro.id;
        tituloInput.value = libro.titulo;
        autorInput.value = libro.autor;
        isbnInput.value = libro.isbn;
        generoInput.value = libro.genero;
        ejemplaresInput.value = libro.ejemplaresDisponibles;

        formTitulo.textContent = 'EDITANDO_REGISTRO_#' + libro.id;
        submitBtn.textContent = 'EJECUTAR::ACTUALIZAR';

        window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
        mostrarMensaje('No se pudo cargar el libro seleccionado', 'error');
        console.error(error);
    }
}

async function manejarSubmit(evento) {
    evento.preventDefault();

    const libro = {
        titulo: tituloInput.value.trim(),
        autor: autorInput.value.trim(),
        isbn: isbnInput.value.trim(),
        genero: generoInput.value.trim(),
        ejemplaresDisponibles: Number(ejemplaresInput.value)
    };

    const id = libroIdInput.value;
    const esEdicion = id !== '';

    try {
        const respuesta = await fetch(esEdicion ? `${API_URL}/${id}` : API_URL, {
            method: esEdicion ? 'PUT' : 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(libro)
        });

        if (!respuesta.ok) {
            const detalle = await extraerMensajeError(respuesta);
            throw new Error(detalle);
        }

        mostrarMensaje(esEdicion ? 'REGISTRO_ACTUALIZADO_OK' : 'REGISTRO_CREADO_OK', 'ok');
        resetearFormulario();
        cargarLibros();
    } catch (error) {
        mostrarMensaje(error.message, 'error');
        console.error(error);
    }
}

async function eliminarLibro(id) {
    const confirmar = confirm(`¿Confirmas eliminar el registro #${id}? Esta acción no se puede deshacer.`);

    if (!confirmar) {
        return;
    }

    try {
        const respuesta = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });

        if (!respuesta.ok) {
            const detalle = await extraerMensajeError(respuesta);
            throw new Error(detalle);
        }

        mostrarMensaje('REGISTRO_#' + id + '_ELIMINADO', 'ok');
        cargarLibros();
    } catch (error) {
        mostrarMensaje(error.message, 'error');
        console.error(error);
    }
}

async function extraerMensajeError(respuesta) {
    try {
        const cuerpo = await respuesta.json();
        return cuerpo.message || `ERROR_${respuesta.status}::OPERACION_RECHAZADA`;
    } catch {
        return `ERROR_${respuesta.status}::OPERACION_RECHAZADA`;
    }
}

function resetearFormulario() {
    form.reset();
    libroIdInput.value = '';
    formTitulo.textContent = 'NUEVO_REGISTRO';
    submitBtn.textContent = 'EJECUTAR::GUARDAR';
}

function mostrarMensaje(texto, tipo) {
    mensajeDiv.textContent = texto;
    mensajeDiv.className = 'mensaje show ' + tipo;

    setTimeout(() => {
        mensajeDiv.classList.remove('show');
    }, 4000);
}

function marcarConexion(exito) {
    statusConexion.textContent = exito ? 'ESTABLE' : 'DESCONECTADO';
    statusConexion.className = exito ? 'ok' : 'error';
}

function escaparTexto(texto) {
    const div = document.createElement('div');
    div.textContent = texto ?? '';
    return div.innerHTML;
}