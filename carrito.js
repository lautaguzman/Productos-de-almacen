const carrito = document.querySelector("#carrito")
carrito.addEventListener("click", () => {
    let modal = document.createElement("div")
    modal.innerHTML = `<h1>Estas en la pagina dos</h1>`

    carrito.appendChild(modal)
})





