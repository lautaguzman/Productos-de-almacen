// FUNCION PARA RENDERIZAR CARRITO
const miCarrito = () => {
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
        <button class="btn-eliminar" id="btnEliminar"><i class="fa-sharp fa-solid fa-trash" style="color: #fa0000;"></i></button>
        <div class="cardHeader">
        <img src="${s.img}">
        <h2>${s.nombre}</h2>
        <span>$${s.precio * s.cantidad}</span>
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

        let eliminar = modalCard.querySelector("#btnEliminar")
        eliminar.addEventListener("click", () => quitarProducto(s.id))

    });

    // FUNCION DE ORDEN SUPERIOR PARA CALCULAR EL TOTAL DE LA COMPRA
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const cardFooter = document.createElement("div")
    cardFooter.className = "cardFooter"
    cardFooter.innerHTML = `total:$${total}`;
    modalContainer.append(cardFooter);
};

verCarrito.addEventListener("click", miCarrito);

// FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRITO
const quitarProducto = (id) => {
    const buscarId = carrito.find((articulo) => articulo.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    });
    mostrarCantidadEnCarrito()
    miCarrito();
};

// FUNCION PARA MOSTRAR LA CANTIDAD DE PRODUCTOS QUE HAY EN EL CARRITO
function mostrarCantidadEnCarrito() {
    const cantidadCarrito = document.querySelector("#Cantidadcarrito");
    cantidadCarrito.style.display = "block"

    const cantidadTotal = carrito.length;

    if (cantidadTotal > 0) {
        cantidadCarrito.textContent = cantidadTotal;
    } else {
        cantidadCarrito.style.display = 'none';
    }
}


