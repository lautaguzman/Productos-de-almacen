// Capturamos el elemento con el ID 'lupa' del documento
const lupa = document.querySelector("#lupa");

// Agregar un evento de clic al ícono de búsqueda para mostrar el contenedor de búsqueda
lupa.addEventListener("click", () => {
    searchContainer.style.display = "flex";
});

// Capturamos el contenedor de búsqueda
const searchContainer = document.querySelector("#searchContainer");

// Capturamos el input de búsqueda
const buscador = document.querySelector("#inputSearch");

// Capturamos el botón para cerrar el buscador
const closeSearch = document.querySelector("#closeSearch");

// Agregar un evento de clic al botón de cerrar búsqueda para ocultar el contenedor de búsqueda y limpiar el campo de búsqueda
closeSearch.addEventListener("click", closeBuscador);

// Función para cerrar el buscador
function closeBuscador() {
    // // Si el campo de búsqueda no está vacío al cerrar el buscador muestra los productos
    if (buscador.value.trim() !== "") {
        mostrarProductos();
    };

    // Ocultar el contenedor de búsqueda
    searchContainer.style.display = "none";

    // Limpiar el campo de búsqueda y ocultar el mensaje de "no hay resultados"
    buscador.value = "";
    noHayResultados.style.display = "none";
}

// Crear un elemento para mostrar un mensaje cuando no hay resultados de búsqueda
const noHayResultados = document.createElement("p");
noHayResultados.className = "mensaje-busqueda";
noHayResultados.innerText = "No hay coincidencias";
content.append(noHayResultados);

// Función para buscar productos
const buscarProd = () => {
    // Capturamos y almacenamos el valor del input en esta constante y lo transformamos a minúscula
    const terminoBusqueda = buscador.value.toLowerCase();

    // Realizar una solicitud para obtener los datos del archivo JSON
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            // Filtrar los productos basados en el término de búsqueda
            const prodFiltrados = data.filter((producto) => producto.nombre.toLowerCase().startsWith(terminoBusqueda) || producto.marca.toLowerCase().startsWith(terminoBusqueda));

            // Vaciar el contenedor de productos
            productosContainer.innerHTML = "";

            // Mostrar el mensaje de "no hay resultados" si no se encuentran productos
            if (prodFiltrados.length === 0) {
                noHayResultados.style.display = "flex";
            } else {
                // Crear una tarjeta de producto para cada producto filtrado
                prodFiltrados.forEach((producto) => {
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

                    // Crear un botón para añadir el producto al carrito
                    const añadirCarrito = document.createElement("button");
                    añadirCarrito.innerText = `Añadir al carrito`;
                    card.append(añadirCarrito);

                    // Agregar un evento al botón para manejar la acción de añadir al carrito
                    añadirCarrito.addEventListener("click", () => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: '¡Producto Agregado!',
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // Verificar si el producto ya está en el carrito y actualizar su cantidad si es así
                        const repeatProduct = carrito.some((repeat) => repeat.id === producto.id)

                        // Si el producto ya está en el carrito, no aumentamos su cantidad
                        if (repeatProduct) {
                            carrito.forEach(prod => {
                                if (prod.id === producto.id) {
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'error',
                                        title: '¡Tu producto ya se encuentra en el carrito!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                            });
                        } else { // Si el producto no está en el carrito, lo agregamos al carrito
                            carrito.push({ id: producto.id, nombre: producto.nombre, marca: producto.marca, medida: producto.medida, img: producto.img, precio: producto.precio, cantidad: producto.cantidad });
                        }

                        // Actualizar la cantidad de productos en el carrito y guardar en el almacenamiento local
                        mostrarCantidadEnCarrito();
                        localSave();
                    });

                });

                // Ocultar el mensaje de "no hay resultados"
                noHayResultados.style.display = "none";
            };
        })
        // Capturar errores en la solicitud fetch
        .catch(error => {
            alert('Error al obtener el archivo JSON', error);
        });
};

// Agregar un evento de entrada al campo de búsqueda para buscar productos
buscador.addEventListener("input", buscarProd);



