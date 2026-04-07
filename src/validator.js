// Quita los campos vacios y junta todo
function isEmptyOrNull(str) { 
  return str.trim().length === 0 || str === null  
}



// Verificar que los input sean solo numeros
function isNumber(str) {
  return !isNaN(str)
}


// algoritmo lunh 
function isCardValid(cardNumber) {
  const arrayNumber = cardNumber.split(""); //separa los numeros
  const reverceArray = arrayNumber.reverse() //revierte los numeros
  // Determinar pares
  let sumaPares = 0; //contador de suma de los pares
  let sumaImpares = 0; //contador de la suma de los impares
  for (let i = 0; i < reverceArray.length; i++) {
    const numero = parseInt(reverceArray[i]);
    if ((i % 2) === 0) { 
      sumaPares = sumaPares + numero;
    } else {
      const operacionMultiplicar = numero * 2;
      if (operacionMultiplicar >= 10) {
        const sumador = ((operacionMultiplicar - 10) + 1);
        sumaImpares = sumaImpares + sumador;
      } else {
        sumaImpares = sumaImpares + operacionMultiplicar;
      }
    }
  }

  //Suma final
  const sumaTotal = sumaPares + sumaImpares;
  const MOD = sumaTotal%10;
  if(MOD === 0){
    return true;
  } else {
    return false;
  }
}

// Cifra todos los numeros menos los ultimos digitos
function maskify(sum) {
  const maskifyString =
  sum.slice(0, -4).replace(/./g, "#") + ("" + sum).slice(-4);
  return maskifyString;
}

// Objeto validador 
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


