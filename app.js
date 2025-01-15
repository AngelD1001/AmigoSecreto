// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Seleccionar los elementos del DOM
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

// Arreglo para almacenar los nombres de los amigos
const amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
    const nombre = inputAmigo.value.trim();

    // Validaciones
    if (!nombre) {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    // Agregar nombre al arreglo y actualizar la lista visual
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    // Limpiar la lista actual
    listaAmigos.innerHTML = "";

    // Agregar cada amigo como un elemento de lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        li.className = "list-item";

        // Botón para eliminar nombres
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.className = "button-delete";
        botonEliminar.onclick = () => eliminarAmigo(index);

        li.appendChild(botonEliminar);
        listaAmigos.appendChild(li);
    });
}

// Función para eliminar un amigo
function eliminarAmigo(index) {
    amigos.splice(index, 1);
    actualizarListaAmigos();
}

// Función para sortear un amigo
function sortearAmigo() {
    // Limpiar resultados previos
    resultado.innerHTML = "";

    if (amigos.length <= 2) {
        alert("Debe haber al menos 3 amigos para realizar el sorteo.");
        return;
    }

    // Seleccionar un nombre aleatorio
    const nombreSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado
    const liResultado = document.createElement("li");
    liResultado.textContent = `El amigo secreto es: ${nombreSorteado}`;
    liResultado.className = "result-item";

    resultado.appendChild(liResultado);
}
