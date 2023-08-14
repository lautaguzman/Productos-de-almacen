const tuCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    const buttonClose = document.createElement("button")
    buttonClose.className = "btnCerrar btn btn-danger";
    buttonClose.innerHTML = `x`;
    buttonClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalContainer.append(buttonClose)

    const modalHeader = document.createElement("h1");
    modalHeader.innerHTML = `
        tu carrito
    `;
    modalContainer.append(modalHeader);


    carrito.forEach((s) => {
        let modalCard = document.createElement("div");
        modalCard.className = "modalCard cardShadow";
        modalCard.innerHTML = `
        <div class="cardHeader">
        <img src="${s.img}">
        <h2>${s.nombre}</h2>
        <span>$${s.precio}</span>
        </div>
        <div class="cardButton"> 
        <span id="resta">-</span>
        <h4>${s.cantidad}</h4>
        <span id="suma">+</span>
        </div>
       
`;

        modalContainer.append(modalCard);

        let resta = document.querySelector("#resta")
        resta.addEventListener("click", () => {
            if (s.cantidad !== 1) {
                s.cantidad--
            };
            tuCarrito();
        });


        let eliminar = document.createElement("button");
        eliminar.className = "btnEliminar";
        eliminar.innerHTML = "delete";
        eliminar.addEventListener("click", quitarProducto);
        modalCard.append(eliminar);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const cardFooter = document.createElement("div")
    cardFooter.className = "cardFooter"
    cardFooter.innerHTML = `total:$${total}`;
    modalContainer.append(cardFooter);
};

verCarrito.addEventListener("click", tuCarrito);


const quitarProducto = () => {
    const buscarId = carrito.find((articulo) => articulo.id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    });
    tuCarrito();
};



