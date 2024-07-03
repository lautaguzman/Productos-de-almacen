// FUNCION QUE MUESTRA UN FORMULARIO EN EL MENU DEL CAERRITO (FINALIZAR COMPRA)
function formCompra() {
  // Capturamos el elemento con el ID 'mainForm' del documento
  const mainForm = document.querySelector("#mainForm");

  // Limpiamos el contenido previo del formulario
  mainForm.innerHTML = "";

  // Creamos un título para el formulario
  const formTitle = document.createElement("h5");
  formTitle.innerHTML = `Finalizar Pedido`;
  mainForm.append(formTitle);

  // Creamos un formulario para la compra
  const formCart = document.createElement("form");
  formCart.className = "form-cart";
  mainForm.append(formCart);

  // Creamos campos de entrada para el nombre, apellido y correo electrónico
  const cartName = document.createElement("input");
  cartName.type = "text";
  cartName.placeholder = "Ingresa tu nombre";
  cartName.id = "cartName";
  formCart.append(cartName);

  const cartLastName = document.createElement("input");
  cartLastName.type = "text";
  cartLastName.placeholder = "Ingresa tu apellido";
  cartLastName.id = "cartLastName";
  formCart.append(cartLastName);

  const cartEmail = document.createElement("input");
  cartEmail.type = "email";
  cartEmail.placeholder = "Ingresa tu email";
  cartEmail.id = "cartEmail";
  formCart.append(cartEmail);
}

// FUNCION PARA VALIDAR FORMULARIO (FINALIZAR COMPRA)
function realizarPedido() {
  // Capturamos los valores de los campos de nombre, apellido y correo electrónico
  const nameCart = document.querySelector("#cartName").value;
  const lastNameCart = document.querySelector("#cartLastName").value;
  const emailCart = document.querySelector("#cartEmail").value;

  // Expresión regular para validar el formato del correo electrónico
  const validarEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validación de los campos del formulario
  if (nameCart === "" || lastNameCart === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Por favor, complete todos los campos para realizar el pedido",
      showConfirmButton: false,
      timer: 3000,
    });
    return;
  }

  if (emailCart === "") {
    Swal.fire({
      position: "center",
      icon: "error",
      title:
        "Por favor, complete el campo de correo electrónico antes de enviar el formulario.",
      showConfirmButton: false,
      timer: 3000,
    });
    return;
  } else if (!validarEmail.test(emailCart)) {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Por favor, ingrese un correo electrónico válido.",
      showConfirmButton: false,
      timer: 1000,
    });
    return;
  }

  // Si se pasa la validación, se muestra un mensaje de éxito
  Swal.fire({
    position: "center",
    icon: "success",
    title: `¡Pedido Realizado!`,
    showConfirmButton: false,
    timer: 3000,
  });

  // Ocultamos el contenedor del carrito y la cantidad en el carrito
  carritoContainer.style.display = "none";
  cantidadCarrito.style.display = "none";

  // Limpiamos el array 'carrito'
  carrito.length = 0;

  // Actualizamos el almacenamiento local
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Recargamos la página después de un cierto tiempo
  setTimeout(() => {
    recargarPag();
  }, 4000);
}
