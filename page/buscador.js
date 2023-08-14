const buscador = document.querySelector("#buscador")
buscador.addEventListener("keydown", function (e) {
    alert("estas presionando la tecla", e.key);
});