// Capturamos el elemento del botón "Inicio" para recargar la página de inicio
const inicio = document.querySelector("#inicio");

// Agregamos un evento de clic al botón "Inicio" para recargar la página
inicio.addEventListener("click", recargarPag);

// Función para recargar la página
function recargarPag() {
    location.reload(); // Recarga la página actual
}
