function sumar(numer1,number2){
  return numer1+numer2
}

function restar(numer1,number2){
  return numer1-numer2
}

function multiplicar(numer1,number2){
  return numer1*numer2
}

function dividir(numer1,number2){
  return numer1/numer2
}

function parseNumber(){
  var number = prompt('Ingrese un numero')
  parseNumber = parseInt(number,10)
  if(isNaN(parseNumber)){
    return false
  }
  return parseNumber
}



var operation = prompt('Ingrese la operacion a realizar')
var number1 = parseNumber()
var number2 = parseNumber()
switch (operation) {
  case 'sumar':
    sumar(numer1,number2)
    break;
  case 'restar':
    restar(numer1,number2)
    break;
  case 'multiplicar':
    multiplicar(numer1,number2)
    break;
  case 'dividir':
    while(number2===0){
      alert('No se puede dividir por 0 se pedira que ingrese el divisor nuevamente')
      number2 = parseNumber()
    }
    dividir(numer1,number2)
    break;
  default:
  console.log(operation + ' no es una operacion valida')
}
