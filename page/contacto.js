function mostrarForm() {
    searchContainer.style.display = "none";

    modalForm.innerHTML = "";
    modalForm.style.display = "flex";


    const formHeader = document.createElement("header")
    formHeader.className = "form-header"
    formHeader.innerHTML = `<h4>dejanos tu mensaje</h4>`
    modalForm.append(formHeader)

    const formClose = document.createElement("span");
    formClose.innerHTML = `<i class="fa-solid fa-xmark" style="color: #ffffff;"></i>`;
    formClose.addEventListener("click", () => {
        modalForm.style.display = "none";
    });
    formHeader.append(formClose);

    const formulario = document.createElement("form");
    formulario.className = "formulario";
    formulario.innerHTML = `
    <div class="form-input">   
    <input type="text" name="nombre" id="nombre" placeholder="Ingresa tu nombre"/>
    <input type="email" name="email" id="email" placeholder="Ingresa tu email"  />
    </div>
    <textarea name="mensaje" id="mensaje" placeholder="Escribe tu mensaje"></textarea>
    <div class="form-btn">
    <button type="reset">vaciar formulario</button>
    <button type="submit">enviar</button>
    </div>`;
    modalForm.append(formulario);

    formulario.addEventListener("submit", validarForm)
}

contacto.addEventListener("click", mostrarForm)


function validarForm(event) {
    event.preventDefault();

    const name = document.querySelector("#nombre").value
    const email = document.querySelector("#email").value
    const msj = document.querySelector("#mensaje").value
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if (name === "" || email === "" || msj === "") {
        alert(`completa los campos`)
        return;
    };

    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    };

    // alert(`tu nombre es ${name}`)

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Mensaje Enviado',
        showConfirmButton: false,
        timer: 1500
    });
    modalForm.style.display = "none";
};