const productos = document.querySelector("#productos")
let stock = [
  { id: 1, nombre: "smart tv", marca: "philips", precio: 53000, img: "./img/smart tv philips 43.jpg" },
  { id: 2, nombre: "lavarropas", marca: "samsung", precio: 12000, img: "./img/lavarropas.jpg" },
  { id: 3, nombre: "microondas", marca: "daewo", precio: 45000, img: "./img/microondas.jpg" },
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
