// 1. Nuestro array de datos
const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

const contenedor = document.getElementById("contenedor-albumes");
const listaUl = document.createElement("ul");
for (const album of albums) {

    const elementoLi = document.createElement("li");
    elementoLi.textContent = album;
    listaUl.appendChild(elementoLi);
}
contenedor.appendChild(listaUl);