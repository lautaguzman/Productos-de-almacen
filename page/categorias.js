const todosItems = document.querySelector("#todosItems");
const almacen = document.querySelector("#almacen");
const carniceria = document.querySelector("#carniceria");
const verduleria = document.querySelector("#verduleria");
const limpieza = document.querySelector("#limpieza");

// Función para filtrar productos por categoría
function filtrarCategorias(categoria) {
    // Realizamos una petición para obtener los datos del archivo JSON
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Filtramos los productos según la categoría seleccionada
            const categoriaFiltrada = data.filter((producto) => producto.categoria === categoria);

            // Vaciamos el contenedor de productos
            productosContainer.innerHTML = "";

            // Creamos una tarjeta de producto para cada producto filtrado
            categoriaFiltrada.forEach(producto => {
                let card = document.createElement("div");
                card.className = "tarjeta";
                card.innerHTML = `
                    <img src="${producto.img}"/>       
                    <h2>${producto.nombre}</h2>
                    <p>${producto.marca}</p> 
                    <p>${producto.medida}</p>
                    <span>$${producto.precio}</span>
                `;
                productosContainer.append(card);

                // Creamos un botón para añadir el producto al carrito
                const añadirCarrito = document.createElement("button");
                añadirCarrito.innerText = `Añadir al carrito`;
                card.append(añadirCarrito);

                // Agregamos un evento al botón para manejar la acción de añadir al carrito
                añadirCarrito.addEventListener("click", () => {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'PRODUCTO AGREGADO',
                        showConfirmButton: false,
                        timer: 1500
                    });

                    // Verificamos si el producto ya está en el carrito y actualizamos su cantidad si es así
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

                    // Actualizamos la cantidad de productos en el carrito y guardamos en el almacenamiento local
                    mostrarCantidadEnCarrito();
                    localSave();
                });
            });
        })
        .catch(error => {
            // Capturamos errores en la solicitud fetch
            alert('Error al obtener el archivo JSON', error);
        });
}

// Agregamos eventos de clic a los elementos de filtrado por categoría
todosItems.addEventListener("click", mostrarProductos);

almacen.addEventListener("click", () => {
    filtrarCategorias('almacen');
});

carniceria.addEventListener("click", () => {
    filtrarCategorias('carniceria');
});

verduleria.addEventListener("click", () => {
    filtrarCategorias('verduleria');
});

limpieza.addEventListener("click", () => {
    filtrarCategorias('limpieza');
});

