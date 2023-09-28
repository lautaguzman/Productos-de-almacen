const buscador = document.querySelector("#inputSearch")
const resultadosBusqueda = document.querySelector("#resultadosBusqueda")

lupa.addEventListener("click", () => {
    modalForm.style.display = "none";

    searchContainer.style.display = "flex";

})

const closeSearch = document.querySelector("#closeSearch")
closeSearch.addEventListener("click", () => {
    searchContainer.style.display = "none";
})


buscador.addEventListener("input", function () {
    const terminoBusqueda = buscador.value.toLowerCase();
    resultadosBusqueda.innerHTML = "";

    // Realizar la búsqueda en el archivo JSON
    fetch(`/data.json`)
        .then((response) => response.json())
        .then((data) => {
            const productosEncontrados = data.filter((producto) =>
                producto.nombre.toLowerCase().includes(terminoBusqueda)
            );

            if (productosEncontrados.length > 0) {
                productosEncontrados.forEach((producto) => {
                    const li = document.createElement("li");
                    li.textContent = producto.nombre;
                    resultadosBusqueda.appendChild(li);
                });
            } else {
                const li = document.createElement("li");
                li.textContent = "No se encontraron productos";
                resultadosBusqueda.appendChild(li);
            }
        })
        .catch((error) => console.error("Error al cargar el archivo JSON:", error));
});










// function mostrarBuscador() {
//     buscadorContainer.innerHTML = "";
//     buscadorContainer.style.display = "flex";

//     const inputBusqueda = document.createElement("input")
//     inputBusqueda.type = "search";
//     buscadorContainer.append(inputBusqueda)


//     const closeInput = document.createElement("span")
//     closeInput.innerHTML = `<i class="fa-solid fa-circle-xmark fa-lg" style="color: #fa0000;"></i>`;
//     closeInput.addEventListener("click", () => {
//         buscadorContainer.style.display = "none";
//     });
//     buscadorContainer.append(closeInput)
// }
// lupa.addEventListener("click", mostrarBuscador)





// inputBusqueda.addEventListener("input",  () => {

//     const terminoBusqueda = buscador.value.toLowerCase();
//     resultadosBusqueda.innerHTML = "";

//     // Realizar la búsqueda en el archivo JSON
//     fetch(`/data.json`)
//         .then((response) => response.json())
//         .then((data) => {
//             const productosEncontrados = data.filter((producto) =>
//                 producto.nombre.toLowerCase().includes(terminoBusqueda)

//             );

//             if (productosEncontrados.length > 0) {
//                 productosEncontrados.forEach((producto) => {
//                     let card = document.createElement("div");
//                     card.className = "tarjeta";
//                     card.innerHTML = `
//                       <img src="${producto.img}"/>
//                       <div class="tarjeta-body">
//                         <h1>${producto.nombre}</h1>
//                         <p>${producto.marca}</p>
//                         <p>$${producto.precio}</p>
//                       </div>
//                     `;

//                     resultadosBusqueda.appendChild(card);

//                     const añadirCarrito = document.createElement("button")
//                     añadirCarrito.innerText = `Añadir al carrito`;

//                     card.append(añadirCarrito);

//                     añadirCarrito.addEventListener("click", () => {
//                         Swal.fire({
//                             position: 'center',
//                             icon: 'success',
//                             title: 'Producto Agregado',
//                             showConfirmButton: false,
//                             timer: 1000
//                         });

//                         // FUNCION PARA QUE NO SE REPITA UN PRODUCTO EN EL CARRITO -- PERO QUE SE REFLEJE EN LA CANTIDAD
//                         const repeatProduct = carrito.some((repeat) => repeat.id === producto.id)

//                         if (repeatProduct) {
//                             carrito.map((prod) => {
//                                 if (prod.id === producto.id) {
//                                     prod.cantidad++;
//                                 }
//                             })
//                         } else {

//                             carrito.push({
//                                 id: producto.id,
//                                 nombre: producto.nombre,
//                                 img: producto.img,
//                                 precio: producto.precio,
//                                 cantidad: producto.cantidad,
//                             });
//                         };
//                         mostrarCantidadEnCarrito()
//                         localSave()
//                     });

//                 });


//             } else {
//                 const li = document.createElement("li");
//                 li.textContent = "No se encontraron productos";
//                 resultadosBusqueda.appendChild(li);
//             }
//         })
//         .catch((error) => console.error("Error al cargar el archivo JSON:", error));
// })




// const buscador = document.querySelector("#buscador")

// buscador.addEventListener("input", function () {
//     const terminoBusqueda = buscador.value.toLowerCase();
//     resultadosBusqueda.innerHTML = "";

//     // Realizar la búsqueda en el archivo JSON
//     fetch(`/data.json`)
//         .then((response) => response.json())
//         .then((data) => {
//             const productosEncontrados = data.filter((producto) =>
//                 producto.nombre.toLowerCase().includes(terminoBusqueda)
//             );

//             if (productosEncontrados.length > 0) {
//                 productosEncontrados.forEach((producto) => {
//                     const li = document.createElement("li");
//                     li.textContent = producto.nombre;
//                     resultadosBusqueda.appendChild(li);
//                 });
//             } else {
//                 const li = document.createElement("li");
//                 li.textContent = "No se encontraron productos";
//                 resultadosBusqueda.appendChild(li);
//             }
//         })
//         .catch((error) => console.error("Error al cargar el archivo JSON:", error));
// });





