const almacen = document.querySelector("#almacen")
const carniceria = document.querySelector("#carniceria")
const verduleria = document.querySelector("#verduleria")
const limpieza = document.querySelector("#limpieza")

const mostrarProd = document.querySelector("#mostrarProd")

function filtrarCategorias(categoria) {
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            const categoriaFiltrada = data.filter((producto) => producto.categoria === categoria)

            productosContainer.innerHTML = "";

            categoriaFiltrada.forEach(producto => {
                let card = document.createElement("div");
                card.className = "tarjeta";
                card.innerHTML = `
                <img src = "${producto.img}"/>       
                <h2>${producto.nombre}</h2>
                <p>${producto.marca}</p> 
                <p>${producto.medida}</p>
                <span>$${producto.precio}</span>
                `;
                productosContainer.append(card);

                const añadirCarrito = document.createElement("button");
                añadirCarrito.innerText = `Añadir al carrito`;
                card.append(añadirCarrito);

                añadirCarrito.addEventListener("click", () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'PRODUCTO AGREGADO',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // FUNCION PARA QUE NO SE REPITA UN PRODUCTO EN EL CARRITO -- PERO QUE SE REFLEJE EN LA CANTIDAD
                    const repeatProduct = carrito.some((repeat) => repeat.id === producto.id);

                    if (repeatProduct) {
                        carrito.forEach(prod => {
                            if (prod.id === producto.id) {
                                prod.cantidad++;
                            }
                        });
                    } else {
                        carrito.push({ id: producto.id, nombre: producto.nombre, marca: producto.marca, medida: producto.medida, img: producto.img, precio: producto.precio, cantidad: producto.cantidad });
                    }

                    mostrarCantidadEnCarrito();
                    localSave();
                });

            });
        })
        .catch(error => {
            alert('Error al obtener el archivo JSON', error);
        });

}

almacen.addEventListener("click", () => {
    filtrarCategorias('almacen');
});

carniceria.addEventListener("click", () => {
    filtrarCategorias('carniceria')
})

verduleria.addEventListener("click", () => {
    filtrarCategorias('verduleria')
})

limpieza.addEventListener("click", () => {
    filtrarCategorias('limpieza')
})

mostrarProd.addEventListener("click", mostrarProductos)