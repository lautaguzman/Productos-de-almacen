const productos = document.querySelector("#productos")
let stock = [
  { id: 1, nombre: "vino", marca: "malbec", precio: 3500, img: "./src/img/vino.jpg" },
  { id: 2, nombre: "mochila", marca: "wagner", precio: 12000, img: "./src/img/mochila.jpg" },
  { id: 3, nombre: "afeitadora", marca: "gama", precio: 18000, img: "./src/img/afeitadora.jpg" },
  { id: 4, nombre: "matero", marca: "pampero", precio: 14000, img: "./src/img/matero.jpg" },
  { id: 5, nombre: "linterna", marca: "stanley", precio: 4000, img: "./src/img/linterna.jpg" },
  { id: 6, nombre: "conservadora", marca: "mor", precio: 9000, img: "./src/img/conservadora.jpg" },
  { id: 7, nombre: "termo", marca: "luminox", precio: 17000, img: "./src/img/termo.jpg" },
  { id: 8, nombre: "fogon", marca: "ñuke", precio: 53000, img: "./src/img/fogon.jpg" },
]


for (let s of stock) {
  let card = document.createElement("div");
  card.className = "card"
  card.innerHTML = `
  <img src="${s.img}"/>
  <div class="card-body">
    <h1>${s.nombre}</h1>
    <p>${s.marca}</p>
    <h5>$${s.precio}</h5>
    </div>
    <button>Añadir al carrito</button>
  `
  productos.appendChild(card)
}
