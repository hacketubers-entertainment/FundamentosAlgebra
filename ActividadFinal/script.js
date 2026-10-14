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
  tablaClickeable();
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");
  const postInfo = publicaciones.find((p) => p.id === postId);
  const contenedor = document.getElementById("contenido-entrada");

  if (postInfo) {
    document.getElementById("titulo-pagina").textContent =
      postInfo.titulo + " - Blog Matemático";
    document.getElementById("titulo-entrada").textContent = postInfo.titulo;
    document.getElementById("fecha-entrada").textContent =
      "Publicado el: " + postInfo.fecha;

    const script = document.createElement("script");
    script.src = postInfo.archivo;
    script.onload = () => {
      contenedor.innerHTML = contenidoEntrada;
    };
    script.onerror = () => {
      contenedor.innerHTML =
        "<p>Error al cargar el contenido de la entrada.</p>";
    };
    document.body.appendChild(script);
  } else {
    contenedor.innerHTML = "<p>Entrada no encontrada.</p>";
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
