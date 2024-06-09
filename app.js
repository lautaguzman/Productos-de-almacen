// CONTENEDOR MAIN DE LA PAGINA
const content = document.querySelector("#content");

// CONTENEDOR DE PRODUCTOS
const productosContainer = document.createElement("div");
productosContainer.className = "productos-container";
content.append(productosContainer);

// FUNCIÓN PARA MOSTRAR LOS PRODUCTOS
function mostrarProductos() {
  // Limpiamos el contenedor de productos antes de agregar nuevos productos
  productosContainer.innerHTML = "";

  // Realizamos una petición para obtener los datos del archivo JSON
  fetch('./data.json')
    .then(response => response.json())
    .then(data => {
      // Iteramos sobre los datos para crear una tarjeta por cada producto
      data.forEach((producto) => {

        // Creamos un elemento de tipo 'div' para representar la tarjeta del producto
        let card = document.createElement("div");
        card.className = "tarjeta";
        // Insertamos el contenido HTML dentro de la tarjeta, utilizando los datos del producto
        card.innerHTML = `
          <img src="${producto.img}"/>       
          <h2>${producto.nombre}</h2>
          <p>${producto.marca}</p> 
          <p>${producto.medida}</p>
          <span>$${producto.precio}</span>
        `;
        // Agregamos la tarjeta al contenedor de productos
        productosContainer.append(card);

        // Creamos un botón para añadir el producto al carrito
        const añadirCarrito = document.createElement("button");
        añadirCarrito.innerText = `Añadir al carrito`;
        card.append(añadirCarrito);

        // Agregamos un evento al botón para manejar la acción de añadir al carrito
        añadirCarrito.addEventListener("click", () => {
          // Mostramos una notificación de éxito utilizando la librería SweetAlert
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Producto Agregado!',
            showConfirmButton: false,
            timer: 1500
          });

          // Verificamos si el producto ya está en el carrito
          const repeatProduct = carrito.some((repeat) => repeat.id === producto.id);

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

          // Actualizamos la cantidad de productos en el carrito y guardamos en el almacenamiento local
          mostrarCantidadEnCarrito();
          localSave();
        });
      });
    })
    .catch(error => {
      // En caso de error en la obtención del archivo JSON, mostramos una alerta
      alert('Error al obtener el archivo JSON', error);
    });

};

// Llamamos a la función para mostrar los productos.
mostrarProductos()

