//funcion que solo pasa solo numeros para aportar al algoritomo
function isEmptyOrNull(str) { 
  return str.trim().length === 0 || str === null  
}
function isNumber(str) {
  return !isNaN(str)
}
//validaciones para el algoritmo lunh en 4 pasos 
function isCardValid(cardNumber) {

  //1. Revertir string
  console.log('cardNumber: ', typeof cardNumber, cardNumber)
  const arrayNumber = cardNumber.split(""); //separa los numeros
  console.log('arrayNumber: ', typeof arrayNumber, arrayNumber);
  const reverceArray = arrayNumber.reverse() //revierte los numeros
  console.log('reverceArray: ', typeof reverceArray, reverceArray);
  const reversaNumero = reverceArray.join('') //junta los numeros
  console.log('juntar Numero: ', typeof reversaNumero, reversaNumero);

  //2. Determinar pares
  let sumaPares = 0; //contador de suma de los pares
  let sumaImpares = 0; //contador de la suma de los impares
  for (let i = 0; i < reverceArray.length; i++) {
    const numero = parseInt(reverceArray[i]);
    // pocicion par 
    if ((i % 2) === 0) { 
      sumaPares = sumaPares + numero;
      console.log("suma par : ", sumaPares, i,numero )
    } else { //posicion inpar
      const operacionMultiplicar = numero * 2;
      if (operacionMultiplicar >= 10) {
        const sumador = ((operacionMultiplicar - 10) + 1);
        sumaImpares = sumaImpares + sumador;
        console.log("suma impar mayor a 10 : ", sumaImpares, i,numero, sumador )
      } else {
        sumaImpares = sumaImpares + operacionMultiplicar;
        console.log("suma impar menor a 10 : ", sumaImpares, i,numero )
      }
    }
  }
  console.log("suma pares" + sumaPares);
  console.log("suma inpares" + sumaImpares );
  //Suma final
  const sumaTotal = sumaPares+sumaImpares;
  const MOD = sumaTotal%10;
  if(MOD===0){
    return true;
  } else {
    return false;
  }
}

//validator.maskify esta funcion es para cifrar todos los numeros menos los ultimos digitos
function maskify(sum) {
  //1234 7856
  const maskifyString =
  sum.slice(0, -4).replace(/./g, "#") + ("" + sum).slice(-4);
  return maskifyString;
}

//unificar las funciones para llevarlos a mi index js
const validator = {
  isValid : function(cardNumber) {
    if (isEmptyOrNull(cardNumber)) {
      return false
    } if (!isNumber(cardNumber)) {
      return false
    }if (!isCardValid(cardNumber)) {
      return false
    }
    return true
  },
  maskify : function(cardNumber) {
    return maskify(cardNumber)
  }
};
export default validator;