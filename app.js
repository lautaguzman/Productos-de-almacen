// SOLUCIONAR ERROR DE BUSQUEDA (NO HAY PROD Y NO RECARGA LOS PROD)
// DARLE ESTILOS AL BUTTON DE CATEGORIA
// AGREGAR FUNCIONES AL FOOTER

// TODO "HACER LA PAGINA RESPONSIVE"

//CAPTURAMOS ID  MAIN 
const content = document.querySelector("#content")

// CONTENEDOR DE PRODUCTOS
const productosContainer = document.createElement("div")
productosContainer.className = "productos-container"
content.append(productosContainer)

function mostrarProductos() {

  productosContainer.innerHTML = "";

  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach((producto) => {
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


// Llamamos a la función para mostrar los productos al cargar la página despues de 2 segundos
mostrarProductos();

// FUNCIONES DEL FOOTER

// const gitHub = document.querySelector("#github")
// function abrirGitHub() {
//   window.open('https://github.com/lautaguzman', '_blank');
// }
// gitHub.addEventListener("click", abrirGitHub)


// const instagram = document.querySelector("#instagram")
// function abrirInstagram() {
//   window.open('https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng==', '_blank');
// }
// instagram.addEventListener("click", abrirInstagram)

// const linkedin = document.querySelector("#linkedin")
// function abrirLinkedin() {
//   window.open('https://www.linkedin.com/in/lautaro-guzman-8841431b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
// }
// linkedin.addEventListener("click", abrirLinkedin)