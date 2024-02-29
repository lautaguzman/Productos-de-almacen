// CAPTURAMOS ID PARA AGREGAR LOS PRODUCTOS
const productos = document.querySelector("#productos");

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((producto) => {
      let card = document.createElement("div");
      card.className = "tarjeta";
      card.innerHTML = `
        <img src="${producto.img}"/>
          <h2>${producto.nombre}</h2>
          <p>${producto.marca}</p> 
          <span>$${producto.precio}</span>
      `;
      productos.append(card);

      const añadirCarrito = document.createElement("button");
      añadirCarrito.innerText = `añadir al carrito`
      card.append(añadirCarrito)


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
          carrito.push({ id: producto.id, nombre: producto.nombre, marca: producto.marca, img: producto.img, precio: producto.precio, cantidad: producto.cantidad });

        mostrarCantidadEnCarrito()
        localSave()
      });

    });
  })

  .catch(error => {
    alert('Error al obtener el archivo JSON', error);
  });


// FUNCIONES DEL FOOTER

const gitHub = document.querySelector("#github")
function abrirGitHub() {
  window.open('https://github.com/lautaguzman', '_blank');
}
gitHub.addEventListener("click", abrirGitHub)


const instagram = document.querySelector("#instagram")
function abrirInstagram() {
  window.open('https://instagram.com/lautaguzman21?igshid=NzZlODBkYWE4Ng==', '_blank');
}
instagram.addEventListener("click", abrirInstagram)

const linkedin = document.querySelector("#linkedin")
function abrirLinkedin() {
  window.open('https://www.linkedin.com/in/lautaro-guzman-8841431b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', '_blank');
}
linkedin.addEventListener("click", abrirLinkedin)