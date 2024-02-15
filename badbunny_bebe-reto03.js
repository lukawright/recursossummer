// REGISTRO
let ingresar = document.getElementById("ingresar");
let registro = document.getElementById("registro");
let mensajeNombre = document.getElementById("mensajeNombre");
let mensajeNotas = document.getElementById("mensajeNotas");
let sectionCrearNotas = document.getElementById("sectionCrearNotas");
let headerTitulo = document.getElementById("headerTitulo");
const registroNombre = () => {
  let nombre = document.getElementById("nombre");
  if (nombre.value == "") {
    mensajeNombre.style.opacity = "1";
  } else {
    registro.style.display = "none";
    headerTitulo.innerHTML = "Mis notas";
    sectionCrearNotas.style.display = "block";
    mensajeNotas.innerHTML = `Hola ${nombre.value}, no tenés ninguna nota. Crea una.`;
  }
};
ingresar.addEventListener("click", registroNombre);
// CREAR NOTAS PRIMERA PARTE
let crearNota = document.getElementById("crearNota");
let sectionNotas = document.getElementById("sectionNotas");
crearNota.addEventListener("click", () => {
  sectionNotas.style.display = "block";
  crearNota.style.display = "none";
});
// CREAR NOTAS SEGUNDA PARTE
let nombreNota = document.getElementById("nombreNota");
let descripcionNota = document.getElementById("descripcionNota");
let categoriaNota = document.getElementById("categoriaNota");
let añadirNota = document.getElementById("añadirNota");
let avisoNota = document.getElementById("avisoNota");
let notas = document.getElementById("notas");
let listaNotas = document.getElementById("listaNotas");
const agregarNota = () => {
  if (nombreNota.value == "" || descripcionNota.value == "" || categoriaNota.value == "Seleccione") {
    avisoNota.innerHTML = `Por favor ${nombre.value}, llena los campos para añadir una nota.`;
  } else {
    avisoNota.innerHTML = `¡Genial ${nombre.value}, la nota ha sido creada!`;
    listaNotas.style.display = "block";
    //ACÁ DECLARO EL OBJETO DE NOTA
    let nuevaNota = {
      nombreNota: nombreNota.value,
      descripcionNota: descripcionNota.value,
      categoriaNota: categoriaNota.value,
    };
    //ACÁ DECLARO EL ARRAY (VACÍO), Y LE PONGO EL MODIFICADOR QUE AÑADA NOTAS SEGÚN EL OBJETO
    let itemsNotas = [];
    itemsNotas.unshift(nuevaNota);
    //ACÁ CREO EL BUCLE QUE CREA EL MODELO CON CADA OBJETO
    itemsNotas.map((nota) => {
      let estructuraNota = `<div>
    <h2></h2>
    <span>${nota.nombreNota}</span>
    <p>${nota.categoriaNota}</p>
    <p>${nota.descripcionNota}</p>
    <button class="formulario__boton">Eliminar nota</button>
  </div>`;
      notas.innerHTML += estructuraNota;
    });
  }
};
añadirNota.addEventListener("click", agregarNota);
