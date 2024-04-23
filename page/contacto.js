const contacto = document.querySelector("#contacto");

// CONTENEDOR DE FORMULARIO
const formularioContainer = document.querySelector("#formularioContainer");

const contactoForm = document.querySelector("#contactoFooter")
contactoForm.addEventListener("click", form)

function form() {
    formularioContainer.innerHTML = ""
    formularioContainer.style.display = "flex";

    const formHeader = document.createElement("header");
    formHeader.className = "form-header";
    formHeader.innerHTML = `<h4>Dejanos tu mensaje</h4>`;
    formularioContainer.append(formHeader);

    const formClose = document.createElement("button");
    formClose.className = "close-form"
    formClose.innerHTML = `<i class="fa-solid fa-square-xmark" style="color: #fa0000"></i>`;
    formClose.addEventListener("click", () => {
        formularioContainer.style.display = "none"
    });
    formHeader.append(formClose)

    const formulario = document.createElement("form")
    formulario.className = "formulario"
    formularioContainer.append(formulario)

    const nameInput = document.createElement("input")
    nameInput.type = "text"
    nameInput.placeholder = "Escribe tu nombre"
    nameInput.id = "nombre";
    formulario.append(nameInput)


    const email = document.createElement("input")
    email.type = "email"
    email.placeholder = "Escribe tu email"
    email.id = "email"
    formulario.append(email)

    const mensaje = document.createElement("textarea")
    mensaje.placeholder = "Escribe tu mensaje";
    mensaje.id = "mensaje"
    formulario.append(mensaje)

    const buttonsForm = document.createElement("div")
    buttonsForm.className = "button-form"
    formulario.append(buttonsForm)

    const limpiarForm = document.createElement("button")
    limpiarForm.type = "button"
    limpiarForm.innerText = `limpiar`
    buttonsForm.append(limpiarForm);
    // Limpiar los campos del formulario 
    limpiarForm.addEventListener("click", () => {
        formulario.reset();
    });


    const enviarForm = document.createElement("button")
    enviarForm.type = "submit"
    enviarForm.innerText = `enviar`
    buttonsForm.append(enviarForm)

    formulario.addEventListener("submit", validarForm)
}

contacto.addEventListener("click", form)

function validarForm(event) {
    event.preventDefault();

    const name = document.querySelector("#nombre").value
    const mje = document.querySelector("#mensaje").value

    const email = document.querySelector("#email").value
    const regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, complete el campo de nombre antes de enviar el formulario.',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    if (email === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, complete el campo de correo electrónico antes de enviar el formulario.',
            showConfirmButton: false,
            timer: 2000
        });
        return;

    } else if (!regExp.test(email)) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, ingrese un correo electrónico válido.',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    }

    if (mje === "") {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Por favor, complete el campo de mensaje antes de enviar el formulario.',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    } else if (mje.length <= 10) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ingresa al menos 10 caracteres en el mensaje',
            showConfirmButton: false,
            timer: 2000
        });
        return;
    };

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: `¡Gracias por tu mensaje ${name}!`,
        showConfirmButton: false,
        timer: 2000
    });

    formularioContainer.style.display = "none";
}