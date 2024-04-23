// ABRIR BUSCADOR
const lupa = document.querySelector("#lupa");
// Agregar un evento de clic al ícono de búsqueda para mostrar el contenedor de búsqueda
lupa.addEventListener("click", () => {
    searchContainer.style.display = "flex";
});

// CONTENEDOR DE BUSCADOR
const searchContainer = document.querySelector("#searchContainer");

// CAPTURO ID DE INPUT DE BUSQUEDA
const buscador = document.querySelector("#inputSearch");


// BOTON PARA CERRAR BUSCADOR
const closeSearch = document.querySelector("#closeSearch");
// Agregar un evento de clic al botón de cerrar búsqueda para ocultar el contenedor de búsqueda y limpiar el campo de búsqueda
closeSearch.addEventListener("click", () => {
    searchContainer.style.display = "none";
    closeMje()
});
function closeMje() {
    if (searchContainer.style.display === "none") {
        buscador.value = "";
        noHayResultados.style.display = "none";
        productosContainer.innerHTML = ""
        mostrarProductos()
    }
}


const noHayResultados = document.createElement("p")
noHayResultados.className = "mensaje-busqueda"
noHayResultados.innerText = "no hay resultados para tu busqueda"

content.append(noHayResultados)

// Función para buscar productos
const buscarProd = () => {

    // CAPTURAMOS y ALMACENAMOS EL VALOR DEL INPUT EN ESTA CONSTANTE Y LO TRANSFORMO EN MINUSCULA CON UN METODO
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
                    let card = document.createElement("article");
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
                        const repeatProduct = carrito.some((repeat) => repeat.id === producto.id)

                        repeatProduct ? carrito.forEach(prod => prod.id === producto.id && prod.cantidad++)
                            :
                            carrito.push({ id: producto.id, nombre: producto.nombre, marca: producto.marca, medida: producto.medida, img: producto.img, precio: producto.precio, cantidad: producto.cantidad });

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


