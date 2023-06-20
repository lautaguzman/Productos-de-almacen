const verCarrito = document.querySelector("#Vercarrito");

const modalContainer = document.querySelector("#modal-container");

verCarrito.addEventListener("click", () => {


    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
      <h1>resumen del pedido</h1>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
`;
    modalContainer.append(modalHeader);

    carrito.forEach((s) => {
        let modalMain = document.createElement("div");
        modalMain.className = "modal-main";
        modalMain.innerHTML = `
        <img src="${s.img}">
        <h2>${s.nombre}</h2>
        <p>$${s.precio}</p>
       `;
        modalContainer.append(modalMain);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio, 0)

    const modalFooter = document.createElement("div")
    modalFooter.className = "modal-footer"
    modalFooter.innerHTML = `total a pagar :$${total}`;
    modalContainer.append(modalFooter);
});
