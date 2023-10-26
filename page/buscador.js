// CAPTURAMOS ID DE INPUT DE BUSQUEDA
const buscador = document.querySelector("#inputSearch")

const buscarProd = () => {
    // CAPTURAMOS y ALMACENAMOS EL VALOR DEL INPUT EN ESTA CONSTANTE Y LO TRANSFORMO EN MINUSCULA
    const terminoBusqueda = buscador.value.toLowerCase();

    fetch('./data.json')
        .then(response => response.json())
        .then(data => {

            const prodFiltrados = data.filter((producto) => producto.nombre.toLowerCase().startsWith(terminoBusqueda) || producto.marca.toLowerCase().startsWith(terminoBusqueda))

            productos.innerHTML = "";

            (prodFiltrados.length === 0) ? alert(`no hay coincidencias`)

                :
                prodFiltrados.forEach((producto) => {
                    let card = document.createElement("div");
                    card.className = "tarjeta";
                    card.innerHTML = `
                    <img src="${producto.img}"/>
                    <div class="tarjeta-info">
                      <h2>${producto.nombre}</h2>
                      <p>${producto.marca}</p>
                      <span>$${producto.precio}</span>`;

                    productos.append(card);


                    const añadirCarrito = document.createElement("button");
                    añadirCarrito.innerText = `Añadir al carrito`;

                    card.append(añadirCarrito);

                    añadirCarrito.addEventListener("click", () => {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Producto Agregado',
                            showConfirmButton: false,
                            timer: 1000
                        });

                        // FUNCION PARA QUE NO SE REPITA UN PRODUCTO EN EL CARRITO -- PERO QUE SE REFLEJE EN LA CANTIDAD
                        const repeatProduct = carrito.some((repeat) => repeat.id === producto.id)


                        repeatProduct ? carrito.forEach(prod => prod.id === producto.id && prod.cantidad++)
                            :
                            carrito.push({ id: producto.id, nombre: producto.nombre, marca: producto.marca, img: producto.img, precio: producto.precio, cantidad: producto.cantidad });

                        mostrarCantidadEnCarrito()
                        localSave()
                    });

                });
        })

        .catch(error => {
            alert('Error al obtener el archivo JSON', error);
        });

    if (buscador.value === "") {
        productos.innerHTML = "";
    }
}

buscador.addEventListener("input", buscarProd)



