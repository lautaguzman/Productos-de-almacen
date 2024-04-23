// ARRAY VACIO DE CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// CAPTURAMOS ID PARA VER CARRITO
const verCarrito = document.querySelector("#Vercarrito");

// CONTENEDOR CARRITO
const carritoContainer = document.querySelector("#carritoContainer");

// FUNCION PARA RENDERIZAR CARRITO
const miCarrito = () => {
    carritoContainer.innerHTML = "";
    carritoContainer.style.display = "flex";

    // HEADER DEL  CARRITO
    const carritoHeader = document.createElement("header");
    carritoHeader.className = "carrito-header"
    carritoHeader.innerHTML = ` <p>detalles de tu compra</p>
        `;
    carritoContainer.append(carritoHeader);

    const closeCarrito = document.createElement("button")
    closeCarrito.innerHTML = `<i class="fa-solid fa-square-xmark" style="color: #fa0000"></i>`;
    closeCarrito.addEventListener("click", () => {
        carritoContainer.style.display = "none";
    });
    carritoHeader.append(closeCarrito)

    // MAIN CARRITO
    const carritoMain = document.createElement("div")
    carritoMain.className = "carrito-main"
    carritoContainer.append(carritoMain)

    // PROD CARRITO
    const prodCarrito = document.createElement("div")
    prodCarrito.className = "prod-carrito"
    carritoMain.append(prodCarrito)

    //CARD DE CARRITO DONDE SE VEN TODOS LOS PRODUCTOS QUE LE AÑADIMOS
    carrito.forEach((producto) => {
        let cardCarrito = document.createElement("div");
        cardCarrito.className = "card-carrito";
        cardCarrito.innerHTML = `
        <img src="${producto.img}">
        <div class="card-list">
        <h5>${producto.nombre}</h5>
        <p>${producto.marca}</p>
        <p>${producto.medida}</p>
        </div>
        `
        prodCarrito.append(cardCarrito)


        //CONTENEDOR DE BOTONERA PARA MANEJAR CANTIDADES
        let cardButton = document.createElement("div")
        cardButton.className = "card-button"
        cardCarrito.append(cardButton)

        let resta = document.createElement("button")
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

        let suma = document.createElement("button")
        suma.innerHTML = `<i class="fa-sharp fa-solid fa-plus" style="color: #00635c;"></i>`
        suma.addEventListener("click", () => {
            producto.cantidad++;
            localSave()
            miCarrito()
        })
        cardButton.append(suma)


        // PRECIO X CANTIDAD DE PRODUCTO
        let precioContainer = document.createElement("div")
        precioContainer.className = "precio-container"
        precioContainer.innerHTML = `<p>precio</p>`
        cardCarrito.append(precioContainer)

        let precioProducto = document.createElement("span")
        precioProducto.innerText = `$${producto.precio * producto.cantidad}`
        precioContainer.append(precioProducto)


        // BOTON PARA ELIMINAR PRODUCTO DEL CARRITO
        let btnEliminar = document.createElement("button")
        btnEliminar.className = "btn-eliminar"
        btnEliminar.innerHTML = `<i class="fa-solid fa-trash" style="color: #ffffff;"></i>`;
        btnEliminar.addEventListener("click", () => quitarProducto(producto.id))
        cardCarrito.append(btnEliminar)

    });

    // FOOTER DEL CARRITO
    // let carritoFooter = document.createElement("footer")
    // carritoFooter.className = "carrito-footer"
    // prodCarrito.append(carritoFooter)

    let vaciarCarrito = document.createElement("button")
    vaciarCarrito.innerText = `vaciar carrito`
    carritoFooter.append(vaciarCarrito)


    // FUNCION DE ORDEN SUPERIOR PARA CALCULAR EL TOTAL DE LA COMPRA
    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
    let carritoTotal = document.createElement("span");
    carritoTotal.className = "carrito-total"
    carritoTotal.innerText = `Total: $${total}`;
    carritoFooter.append(carritoTotal);

};


verCarrito.addEventListener("click", () => {
    miCarrito()
    // if (carrito.length === 0) {
    //     Swal.fire({
    //         position: 'center',
    //         icon: 'error',
    //         title: 'CARRITO VACIO',
    //         showConfirmButton: false,
    //         timer: 1500
    //     });
    // } else { miCarrito() };
});


// FUNCION CERRAR CARRITO
// function cerrarCarrito() {
//     if (carrito.length === 0) {
//         carritoContainer.style.display = "none"
//     }
// }

// FUNCION PARA ELIMINAR UN PRODUCTO DEL CARRITO
const quitarProducto = (id) => {
    const buscarId = carrito.find((articulo) => articulo.id === id)

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId
    });
    mostrarCantidadEnCarrito()
    localSave();
    miCarrito();
    // cerrarCarrito()
};

// FUNCION PARA MOSTRAR LA CANTIDAD DE PRODUCTOS QUE HAY EN EL CARRITO
function mostrarCantidadEnCarrito() {
    const cantidadCarrito = document.querySelector("#cantidadCarrito");
    cantidadCarrito.style.display = "flex"

    const cantidadTotal = carrito.length;

    localStorage.setItem("cantidadTotal", JSON.stringify(cantidadTotal))

    cantidadTotal > 0 ?
        cantidadCarrito.textContent = JSON.parse(localStorage.getItem("cantidadTotal"))
        :
        cantidadCarrito.style.display = 'none';

};

mostrarCantidadEnCarrito()
// cerrarCarrito()

const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};

