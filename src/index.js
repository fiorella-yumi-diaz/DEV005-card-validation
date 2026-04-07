import validator from './validator.js';

// Selector del Dom
const ValorVistaValidar =document.getElementById('cajaVistaInputs');
const inputValorNombre = document.getElementById('inputValorNombre');
const valorInputCard = document.getElementById('inputValorCard');
const valorBotonValidar = document.getElementById('botonValidar');
const valorResultadoFalso = document.getElementById('resultadoFalso')
const valorVistaResultado= document.getElementById('cajaResultadoVista');
const valorTituloResultadoTrue = document.getElementById('tituloValorVerdadero');
const valorResultadoNombre = document.getElementById('ouputNombre');
const valorResultadoCard =  document.getElementById('ouputCard');
const btnReturn =  document.getElementById("btn-return");
const formulario = document.getElementsByClassName("form");



// Resultado correcto de la tarjeta
function mostrarExitoso(nombre, cardMaskify) { 
  ValorVistaValidar.style.display = "none";
  valorResultadoFalso.style.display = "none";
  valorVistaResultado.style.display = "block";
  valorResultadoNombre.innerHTML = nombre;
  valorResultadoCard.innerHTML = cardMaskify;
  valorTituloResultadoTrue.innerHTML = "Donacion exitosa";
}

// Resultado falso de la tarjeta
function mostrarFallido() {
  valorVistaResultado.style.display = "none"
  valorResultadoFalso.innerHTML = "Invalid card"
}

// Funcion que muestra a tarjeta resultado
function mostrarValidacionCard() {
  const isValid = validator.isValid(valorInputCard.value);
  const cardNumberMaskify = validator.maskify(valorInputCard.value);
  if (isValid === true) {
    mostrarExitoso(inputValorNombre.value, cardNumberMaskify)
  } else {
    mostrarFallido() 
  }
}
valorBotonValidar.addEventListener('click',mostrarValidacionCard);







btnReturn.addEventListener('click', function name(event) {
  event.preventDefault();
  ValorVistaValidar.style.display = "flex";
  valorVistaResultado.style.display = "none";
  console.log("PRUEBA");

})