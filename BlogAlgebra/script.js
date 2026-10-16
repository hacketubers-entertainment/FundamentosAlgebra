const buttonInicio = document.getElementById("buttonUnidad1");
const contButtons = document.getElementById("contButtons");
const main = document.getElementById("main");
const titulo = document.getElementById("titulo");
const rows = document.getElementsByClassName("row");
let inactivo;

let activos = [];
console.log(rows);
function unidad1() {
  contButtons.remove();
  main.style.display = "block";
  titulo.style.fontSize = "50px";
  main.innerHTML = contenidoUnidad1;
  tablaClickeable();
}
function unidad2() {
  contButtons.remove();
  main.style.display = "block";
  titulo.style.fontSize = "50px";
  main.innerHTML = contenidoUnidad2;
  console.log(contenidoUnidad2)
  const contEntradas = document.getElementById("contEntradas")
  // Cargar dinámicamente las entradas definidas en posts.js
  if (typeof unidad2entradas !== "undefined" && unidad2entradas.length > 0) {
    unidad2entradas.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="entradas.html?id=${post.id}">
          <div class="Entrada">
            <h2 style="view-transition-name: titulo">${post.titulo}</h2>
            <span class="fecha-post">${post.fecha}</span>
            <p class="resumen-post">${post.resumen}</p>
          </div>
        </a>
      `;
      contEntradas.appendChild(li);
    });
  } else {
    contEntradas.innerHTML = "<li>No hay entradas publicadas aún.</li>";
  }
}
function Reload() {
  location.reload();
}
function tablaClickeable() {
  for (let index = 0; index < rows.length; index++) {
    let row = rows[index];
    row.addEventListener("click", (e) => {
      activos = [];
      console.log("le di click", e.currentTarget.id);
      for (let cont = 0; cont < rows.length; cont++) {
        if (cont == e.currentTarget.id) {
          e.currentTarget.style.background = "#cdbbf7";
          e.currentTarget.style.boxShadow =
            "inset 5px 5px 13px #aa9bcd, inset -5px -5px 13px #f0dbff";
          console.log("encontro", e.currentTarget.id);
          activos.push(1);
        } else {
          inactivo = document.getElementById(cont);
          inactivo.style.background = "transparent";
          inactivo.style.boxShadow =
            "inset 0px 0px 0px #fff, inset 0px 0px 0px #fff";
          activos.push(0);
        }
      }
      console.log("activos fuera for", activos);
    });
    row.id = index;
    console.log(row);
  }
}
