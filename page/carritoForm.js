function formCompra() {
    const mainForm = document.querySelector("#mainForm")

    mainForm.innerHTML = "";

    const formTitle = document.createElement("h5")
    formTitle.innerHTML = `finalizar pedido`
    mainForm.append(formTitle)

    const formCart = document.createElement("form")
    formCart.className = "form-cart"
    mainForm.append(formCart)

    const cartName = document.createElement("input")
    cartName.type = "text"
    cartName.placeholder = "ingresa tu nombre"
    cartName.id = "cartName"
    formCart.append(cartName)

    const cartLastName = document.createElement("input")
    cartLastName.type = "text"
    cartLastName.placeholder = "ingresa tu apellido"
    cartLastName.id = "cartLastName"
    formCart.append(cartLastName)

    const cartEmail = document.createElement("input")
    cartEmail.type = "email"
    cartEmail.placeholder = "ingresa tu email"
    cartEmail.id = "cartEmail"
    formCart.append(cartEmail)
}

function realizarPedido() {
    const nameCart = document.querySelector("#cartName").value
    const lastNameCart = document.querySelector("#cartLastName").value
    const emailCart = document.querySelector("#cartEmail").value

    if (nameCart === "" || lastNameCart === "" || emailCart === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, complete todos los campos para realizar el pedido',
            showConfirmButton: false,
            timer: 3000
        });
        return;
    };

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡Pedido Realizado!`,
        showConfirmButton: false,
        timer: 2000
    });

    carritoContainer.style.display = "none"
    cantidadCarrito.style.display = "none"

    carrito.length = 0; // Limpia el array
    localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualiza localStorage

}






