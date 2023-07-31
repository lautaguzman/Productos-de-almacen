function mostrarModalForm() {
    modalForm.innerHTML = "";
    modalForm.style.display = "flex";

    const buttonForm = document.createElement("button");
    buttonForm.className = "buttonForm";
    buttonForm.innerHTML = `❌`;
    buttonForm.addEventListener("click", () => {
        modalForm.style.display = "none";
    });
    modalForm.append(buttonForm);

    const formulario = document.createElement("form");
    formulario.className = "formulario";
    formulario.innerHTML = `
    <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre" required />
    <input type="email" name="email" id="email" placeholder="Ingresa tu email" required />
    <textarea name="mensaje" id="mensaje" placeholder="Escribe tu mensaje" required></textarea>`;
    modalForm.append(formulario);

    const buttonSubmit = document.createElement("button");
    buttonSubmit.innerHTML = `submit`;
    formulario.append(buttonSubmit);

    formulario.addEventListener("submit", validarFormulario);
}

function validarFormulario(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }
    modalForm.style.display = "none";
}

contacto.addEventListener("click", mostrarModalForm);


