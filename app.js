// CAPTURAMOS ID PARA AGREGAR FORMULARIO
const contacto = document.querySelector("#contacto");
const modalForm = document.querySelector("#modalForm")

// CAPTURAMOS ID PARA AGREGAR CARRITO
const verCarrito = document.querySelector("#Vercarrito");
const modalContainer = document.querySelector("#modal-carrito");

// CAPTURAMOS ID PARA AGREGAR LOS PRODUCTOS
const productos = document.querySelector("#productos");

// ARRAY VACIO DE CARRITO
let carrito = []

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((producto) => {
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


      const añadirCarrito = document.createElement("button")
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

        if (repeatProduct) {
          carrito.map((prod) => {
            if (prod.id === producto.id) {
              prod.cantidad++;
            }
          })
        } else {

          carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            img: producto.img,
            precio: producto.precio,
            cantidad: producto.cantidad,
          });
        };
        mostrarCantidadEnCarrito()
      });

    });
  })

  .catch(error => {
    alert('Error al obtener el archivo JSON', error);
  });








