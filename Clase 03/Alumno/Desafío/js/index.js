//funciones
function sumar(number1,number2){
  return number1+number2
}

function restar(number1,number2){
  return number1-number2
}

function multiplicar(number1,number2){
  return number1*number2
}

function dividir(number1,number2){
  return number1/number2
}

function parseNumber(){
  var number = prompt('Ingrese un numero')
  var parseNumber = parseInt(number,10)
  if(isNaN(parseNumber)){
    return false
  }
  return parseNumber
}

//resolucion
var operation = prompt('Ingrese la operacion a realizar')

var number1 = parseNumber()
var number2 = parseNumber()

if(number1===false || number2===false){
  alert('Numero incorrecto')
}
else{
  switch (operation) {
    case 'sumar':
      result = sumar(number1,number2)
      console.log('La suma es: '+result);
      break;
    case 'restar':
      result = restar(number1,number2)
      console.log('La resta es: '+result);
      break;
    case 'multiplicar':
      result = multiplicar(number1,number2)
      console.log('La multiplicacion es: '+result);
      break;
    case 'dividir':
      while(number2===0){
        alert('No se puede dividir por 0, se pedira que ingrese el divisor nuevamente')
        number2 = parseNumber()
      }
      result = dividir(number1,number2)
      console.log('La division es: '+result);
      break;
    default:
      console.log(operation + ' no es una operacion valida')
  }
}
