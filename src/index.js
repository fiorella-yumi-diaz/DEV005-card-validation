import validator from './validator.js';

//Elemetos DOM en variables
//const vistaBoton1 = document.getElementById('');
//const vistaBoton2 = document.getElementById('');
//const vistaBoton3 = document.getElementById('');
//const vistaCaja1 = document.getElementById('');
const ValorVistaValidar =document.getElementById('cajaVistaInputs');
const inputValorNombre = document.getElementById('inputValorNombre');
const valorInputCard = document.getElementById('inputValorCard');
const valorBotonValidar = document.getElementById('botonValidar');
const valorResultadoFalso = document.getElementById('resultadoFalso')
const valorVistaResultado= document.getElementById('cajaResultadoVista');
const valorTituloResultadoTrue = document.getElementById('tituloValorVerdadero');
const valorResultadoNombre = document.getElementById('ouputNombre');
const valorResultadoCard =  document.getElementById('ouputCard');
//const targets = document.getElementById('[data-target]');
//const content = document.getElementById('[data-content]');

//Funciones que interactuen con el DOM
/*
targets.forEach(target => {
  target.addEventListener("click", () => {
    content.forEach(c => {
      c.classList.remove('active');
    })
    const t = document.querySelector(target.dataset.target);
    t.classList.add("active")
  })
});
*/
function mostrarExitoso(nombre, cardMaskify) { 
  ValorVistaValidar.style.display = "none";
  valorResultadoFalso.style.display = "none";
  valorVistaResultado.style.display = "block";
  valorResultadoNombre.innerHTML = nombre;
  valorResultadoCard.innerHTML = cardMaskify;
  valorTituloResultadoTrue.innerHTML = "Donacion exitosa";
}

function mostrarFallido() {
  valorVistaResultado.style.display = "none"
  valorResultadoFalso.innerHTML = "Tarjeta invalida"
}

function mostrarValidacionCard() {
  const isValid = validator.isValid(valorInputCard.value);
  if (isValid === true) {//faltacompletar
    const cardNumberMaskify = validator.maskify(valorInputCard.value);
    mostrarExitoso(inputValorNombre.value, cardNumberMaskify)

  } else {
    mostrarFallido() 
  }
}

//Eventos del DOM
//vistaBoton1.addEventListener('click',);
//vistaBoton2.addEventListener('click', );
//vistaBoton3.addEventListener('click',);
valorBotonValidar.addEventListener('click',mostrarValidacionCard);

//retorna el valor
console.log(validator);