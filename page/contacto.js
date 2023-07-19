const formularioContacto = () => {
    modalContacto.innerHTML = "";
    modalContacto.style.display = "flex";

    const formHeader = document.createElement("div")
    formHeader.innerHTML = `
    <h3>rellena este formulario</h3>`
    modalContacto.append(formHeader)

    const buttonForm = document.createElement("button")
    buttonForm.innerHTML = `❌`
    buttonForm.addEventListener("click", () => {
        modalContacto.style.display = "none";
    })
    formHeader.append(buttonForm)

    const formulario = document.createElement("form")
    formulario.innerHTML = `
    <input type="email" name="email" id="email" placeholder="Ingresa tu email" />
    <input type="text" name="mensaje" id="mensaje" placeholder="dejanos tu mensaje"/>
    <button typo="submit">enviar</button>`
    modalContacto.append(formulario)


}

contacto.addEventListener("click", formularioContacto)
