const productos = document.querySelector("#productos")
let stock = [
  { id: 1, nombre: "smart tv", precio: 53000, img: "./img/smart tv philips 43.jpg" },
  { id: 2, nombre: "lavarropas", precio: 12000, img: "./img/lavarropas.jpg" },
  { id: 3, nombre: "microondas", precio: 45000, img: "./img/microondas.jpg" },
]


for (let s of stock) {
  let tarjeta = document.createElement("div");
  tarjeta.className = "card"
  tarjeta.innerHTML = `
  <div class="card-details">
  <img src="${s.img}">
    <p class="text-title">${s.nombre}</p>
    <p class="text-body">${s.precio}</p>
  </div>
  <button class="card-button" id="comprar">comprar</button>
  `
  productos.appendChild(tarjeta)
}
