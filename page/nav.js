// Capturamos el elemento del botón "Inicio" para recargar la página de inicio
const inicio = document.querySelector("#inicio");

// Agregamos un evento de clic al botón "Inicio" para recargar la página
inicio.addEventListener("click", recargarPag);

// Capturamos los elementos para abrir y cerrar la barra de navegación en dispositivos móviles
const openItems = document.querySelector("#openItems");
const closeItems = document.querySelector("#closeItems");
const navItems = document.querySelector("#navItems");

// Agregamos un evento de clic al botón para abrir la barra de navegación
openItems.addEventListener("click", () => {
    navItems.style.display = "flex";
});

// Agregamos un evento de clic al botón para cerrar la barra de navegación
closeItems.addEventListener("click", () => {
    navItems.style.display = "none";
});

// Función para recargar la página
function recargarPag() {
    location.reload(); // Recarga la página actual
}
