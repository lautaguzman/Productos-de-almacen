// CAPTURAMOS ID PARA VER CARRITO
const verCarrito = document.querySelector("#Vercarrito");

// CONTENEDOR CARRITO
const carritoContainer = document.querySelector("#carritoContainer");


const closeCarrito = document.querySelector("#closeCarrito")
closeCarrito.addEventListener("click", () => {
    carritoContainer.style.display = "none"
})

// ARRAY VACIO DE CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// FUNCION PARA RENDERIZAR CARRITO
const miCarrito = () => {
    if (carrito.length === 0) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'CARRITO VACIO',
            showConfirmButton: false,
            timer: 2000
        });
        carritoContainer.style.display = "none"
    } else {
        carritoContainer.style.display = "flex";

        // MAIN CARRITO DONDE SE VEN LOS PRODUCTOS QUE AGREGAMOS
        const mainCard = document.querySelector("#mainCard")
        mainCard.innerHTML = "";

        //CARD DE CARRITO DONDE SE VEN TODOS LOS PRODUCTOS QUE LE AÑADIMOS
        carrito.forEach((productos) => {
            let cardCarrito = document.createElement("div");
            cardCarrito.className = "card-carrito";
            cardCarrito.innerHTML = `
        <img src="${productos.img}">
        <div class="card-list">
        <h5>${productos.nombre}</h5>
        <p>${productos.marca}</p>
        <p>${productos.medida}</p>
        </div>`
            mainCard.append(cardCarrito)


            //CONTENEDOR DE BOTONERA PARA MANEJAR CANTIDADES
            let cardButton = document.createElement("div")
            cardButton.className = "card-button"
            cardCarrito.append(cardButton)

            let resta = document.createElement("button")
            resta.innerHTML = `<i class="fa-sharp fa-solid fa-minus" style="color: #00635c;"></i>`
            resta.addEventListener("click", () => {
                if (productos.cantidad !== 1) {
                    productos.cantidad--
                };
                localSave()
                miCarrito();
            });

            cardButton.append(resta)

            let cardCantidad = document.createElement("h4")
            cardCantidad.innerHTML = `${productos.cantidad}`
            cardButton.append(cardCantidad)



            let suma = document.createElement("button")
            suma.innerHTML = `<i class="fa-sharp fa-solid fa-plus" style="color: #00635c;"></i>`
            suma.addEventListener("click", () => {
                productos.cantidad++;
                localSave()
                miCarrito()
            })
            cardButton.append(suma)


            // PRECIO X CANTIDAD DE PRODUCTO
            let precioProducto = document.createElement("span")
            precioProducto.className = "card-precio"
            precioProducto.innerText = `$${productos.precio * productos.cantidad}`
            cardCarrito.append(precioProducto)


            // BOTON PARA ELIMINAR PRODUCTO DEL CARRITO
            let btnEliminar = document.createElement("i")
            btnEliminar.className = "delete-prod fa-solid fa-delete-left fa-2xl"
            btnEliminar.style = "color: #ff0000"
            btnEliminar.addEventListener("click", () => quitarProducto(productos.id))
            cardCarrito.append(btnEliminar)

        });

        const carritoFooter = document.querySelector("#carritoFooter")
        carritoFooter.innerHTML = "";

        const totalCompra = document.createElement("p")
        carritoFooter.append(totalCompra)


        //FUNCION DE ORDEN SUPERIOR PARA CALCULAR EL TOTAL DE LA COMPRA
        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0)
        const totalFormateado = total.toLocaleString();
        totalCompra.innerHTML = `total: ${totalFormateado}`
    }
    // FINALIZAR PEDIDO
    const buttonFooter = document.createElement("button")
    buttonFooter.innerText = `realizar pedido`;
    carritoFooter.append(buttonFooter)

    buttonFooter.addEventListener("click", realizarPedido)
};

verCarrito.addEventListener("click", function () {
    miCarrito()
    formCompra()
}
);


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

const localSave = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};


