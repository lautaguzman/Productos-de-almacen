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
    carrito.forEach((producto) => {

        // CONTENEDOR DE PRODUCTOS EN EL CARRITO

        let cardCarrito = document.createElement("div");
        cardCarrito.className = "card-carrito";
        cardCarrito.innerHTML = `
        <img src="${producto.img}">
        <div class="card-list">
        <h2>${producto.nombre}</h2>
        <h3>${producto.marca}</h3>
        <span>$${producto.precio * producto.cantidad}</span>
        </div>
        `
        modalContainer.append(cardCarrito)


        // CREAMOS CONTENEDOR DE  BOTONERA PARA MANEJAR CANTIDADES
        let cardButton = document.createElement("div")
        cardButton.className = "card-button"
        cardCarrito.append(cardButton)

        let resta = document.createElement("span")
        resta.innerHTML = `<i class="fa-sharp fa-solid fa-minus" style="color: #00635c;"></i>`
        resta.addEventListener("click", () => {
            if (producto.cantidad !== 1) {
                producto.cantidad--
            };
            localSave()
            miCarrito();
        });

        cardButton.append(resta)

        let cardCantidad = document.createElement("h4")
        cardCantidad.innerHTML = `${producto.cantidad}`
        cardButton.append(cardCantidad)

        let suma = document.createElement("span")
        suma.innerHTML = `<i class="fa-sharp fa-solid fa-plus" style="color: #00635c;"></i>`
        suma.addEventListener("click", () => {
            producto.cantidad++;
            localSave()
            miCarrito()
        })
        cardButton.append(suma)

        // BOTON PARA ELIMINAR PRODUCTO DEL CARRITO
        let btnEliminar = document.createElement("button")
        btnEliminar.className = "btn-eliminar"
        btnEliminar.innerHTML = `<span>eliminar</span>`;
        btnEliminar.addEventListener("click", () => quitarProducto(producto.id))
        cardCarrito.append(btnEliminar)

        modalContainer.append(cardCarrito);
    });

    // FUNCION DE ORDEN SUPERIOR PARA CALCULAR EL TOTAL DE LA COMPRA
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)

    const carritoFooter = document.createElement("div")
    carritoFooter.className = "carrito-footer"
    carritoFooter.innerHTML = `<span>total:$${total}</span>`;
    modalContainer.append(carritoFooter);

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

    cantidadTotal > 0 ?
        cantidadCarrito.textContent = JSON.parse(localStorage.getItem("cantidadTotal"))
        :
        cantidadCarrito.style.display = 'none';

};

mostrarCantidadEnCarrito()
