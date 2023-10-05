// CAPTURAMOS ID DE INPUT DE BUSQUEDA
const buscador = document.querySelector("#inputSearch")

lupa.addEventListener("click", () => {
    modalForm.style.display = "none";

    searchContainer.style.display = "flex";
});

// FUNCION PARA CERRAR CONTENEDOR DE BUSQUEDA
const closeSearch = document.querySelector("#closeSearch")
closeSearch.addEventListener("click", () => {
    searchContainer.style.display = "none";
});


buscador.addEventListener("input", function () {
    const terminoBusqueda = buscador.value.toLowerCase();

    // Realizar la búsqueda en el archivo JSON
    fetch('./data.json')
        .then((response) => response.json())
        .then((data) => {
            const productosEncontrados = data.filter((producto) =>
                producto.nombre.toLowerCase().includes(terminoBusqueda) || producto.marca.toLowerCase().includes(terminoBusqueda)
            );

            // Limpiar el contenedor de productos antes de mostrar los resultados de la búsqueda
            productos.innerHTML = "";

            // Mostrar los productos encontrados en el contenedor
            productosEncontrados.forEach((producto) => {
                let card = document.createElement("div");
                card.className = "tarjeta";
                card.innerHTML = `
                    <img src="${producto.img}"/>
                    <div class="tarjeta-body">
                        <h1>${producto.nombre}</h1>
                        <p>${producto.marca}</p>
                        <p>$${producto.precio}</p>
                    </div>
                `;
                productos.append(card);
            });
        })
        .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});





