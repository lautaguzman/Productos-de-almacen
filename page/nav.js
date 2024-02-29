// BARRA DE NAVEGACION (RESPONSIVE)

// CAPTURAMOS ID PARA RECARGAR PAGINA DE INICIO
const inicio = document.querySelector("#inicio");
// RECARGAR PAGINA (EVENTO Y METODO)
inicio.addEventListener("click", () => {
    location.reload();
});


const openItems = document.querySelector("#openItems")

const closeItems = document.querySelector("#closeItems")

const navItems = document.querySelector("#navItems")

openItems.addEventListener("click", () => {
    navItems.style.display = "flex"
})

closeItems.addEventListener("click", () => {
    navItems.style.display = "none"
})