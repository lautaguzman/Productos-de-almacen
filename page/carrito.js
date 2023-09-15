// FUNCION PARA RENDERIZAR CARRITO
const miCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";

    // CREAMOS EL HEADER DE  CARRITO
    const modalHeader = document.createElement("div");
    modalHeader.className = "carrito-header"
    modalHeader.innerHTML = ` <h4>tu carrito</h4>
        `;
    modalContainer.append(modalHeader);

    const buttonClose = document.createElement("span")
    buttonClose.innerHTML = `<i class="fa-solid fa-xmark" style="color: #ffffff;"></i>`;
    buttonClose.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });
    modalHeader.append(buttonClose)
    // CREAMOS CARD DE CARRITO DONDE SE VEN TODOS LOS PRODUCTOS QUE LE AÑADIMOS
    carrito.forEach((s) => {
        let modalCard = document.createElement("div");
        modalCard.className = "modalCard";

        let cardHeader = document.createElement("div")
        cardHeader.className = "card-header"
        cardHeader.innerHTML = ` 
        <img src="${s.img}">
        <h2>${s.nombre}</h2>
        <span>$${s.precio * s.cantidad}</span>`
        modalCard.append(cardHeader)

        // CREAMOS BOTONERA PARA MANEJAR CANTIDADES
        let cardButton = document.createElement("div")
        cardButton.className = "cardButton"
        modalCard.append(cardButton)

        let resta = document.createElement("span")
        resta.innerHTML = `<i class="fa-sharp fa-solid fa-minus" style="color: #000000;"></i>`
        resta.addEventListener("click", () => {
            if (s.cantidad !== 1) {
                s.cantidad--
            };
            localSave()
            miCarrito();
        });

        cardButton.append(resta)

        let cardCantidad = document.createElement("h4")
        cardCantidad.innerHTML = `${s.cantidad}`
        cardButton.append(cardCantidad)

        let suma = document.createElement("span")
        suma.innerHTML = `<i class="fa-sharp fa-solid fa-plus" style="color: #000000;"></i>`
        suma.addEventListener("click", () => {
            s.cantidad++;
            localSave()
            miCarrito()
        })
        cardButton.append(suma)

        // BOTON PARA ELIMINAR PRODUCTO DEL CARRITO
        let btnEliminar = document.createElement("button")
        btnEliminar.className = "btn-eliminar"
        btnEliminar.innerHTML = `<span>eliminar</span><i class="fa-sharp fa-solid fa-trash" style="color: #000000"></i>`;
        btnEliminar.addEventListener("click", () => quitarProducto(s.id))
        modalCard.append(btnEliminar)

        modalContainer.append(modalCard);
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
    localSave();
    miCarrito();
};

// FUNCION PARA MOSTRAR LA CANTIDAD DE PRODUCTOS QUE HAY EN EL CARRITO
function mostrarCantidadEnCarrito() {
    const cantidadCarrito = document.querySelector("#Cantidadcarrito");
    cantidadCarrito.style.display = "block"

    const cantidadTotal = carrito.length;

    localStorage.setItem("cantidadTotal", JSON.stringify(cantidadTotal))

    if (cantidadTotal > 0) {
        cantidadCarrito.textContent = JSON.parse(localStorage.getItem("cantidadTotal"));
    } else {
        cantidadCarrito.style.display = 'none';
    }
};

mostrarCantidadEnCarrito()
