// BUTTON CONTENEDOR QUE MUESTRA/OCULTA LAS CATEGORIAS
const desplegarCategoria = document.querySelector("#desplegarCategorias")
// ICONO PARA CAMBIAR FLECHA
const cambiarIcono = document.querySelector("#cambiarIcono")
cambiarIcono.style = `color: #00635c`
// CONTENEDOR DE LAS CATEGORIAS
const categorias = document.querySelector("#categorias")

desplegarCategoria.addEventListener("click", mostrarCategorias)

function mostrarCategorias() {
    if (cambiarIcono.classList.contains("fa-arrow-down")) {
        cambiarIcono.classList.remove("fa-arrow-down");
        cambiarIcono.classList.add("fa-arrow-up");
        categorias.style.display = "flex";
    } else {
        cambiarIcono.classList.remove("fa-arrow-up");
        cambiarIcono.classList.add("fa-arrow-down");
        categorias.style.display = "none";
    }
}



