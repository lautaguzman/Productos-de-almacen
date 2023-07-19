const tuCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1>resumen del pedido</h1>
`;
    modalContainer.append(modalHeader);

    const buttonClose = document.createElement("button")
    buttonClose.innerHTML = `cerrar`
    buttonClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(buttonClose)



    carrito.forEach((s) => {
        let modalMain = document.createElement("div");
        modalMain.className = "modal-main";
        modalMain.innerHTML = `
        <img src="${s.img}">
        <button>➖</button>
        <h2>${s.nombre}</h2>
        <button>➕</button>
        <p>$${s.precio}</p>
`;

        modalContainer.append(modalMain);

        let eliminar = document.createElement("span");
        eliminar.innerHTML = "❌";
        eliminar.addEventListener("click", quitarProducto);
        modalMain.append(eliminar);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `total a pagar :$${total}`;
    modalContainer.append(modalFooter);
};

verCarrito.addEventListener("click", tuCarrito);

const quitarProducto = () => {
    const buscarId = carrito.find((articulo) => articulo.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    });
    tuCarrito();
};



