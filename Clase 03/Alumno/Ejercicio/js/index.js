//funciones
function typeOfDay(dia){
  switch (dia) {
    case 'Lunes':
    case 'Martes':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
      console.log(dia + ' es día habil')
      break;
    case 'Sabado':
    case 'Domingo':
    case 'sabado':
    case 'domingo':
        console.log(dia + 'es fin de semana')
      break;
    default:
      console.log(dia + ' no es un día valido')
      break;
  }
}

function mostrarSaludo(){
  var firstName = prompt('Ingrese su nombre')
  var lastName = prompt('Ingrese su apellido')
  console.log('Hola '+ firstName +' '+lastName)
}

//resolucion
var day1 = prompt('Ingrese día 1')
typeOfDay(day1)
var day2 = prompt('Ingrese día 2')
typeOfDay(day2)
var day3 = prompt('Ingrese día 3')
typeOfDay(day3)

mostrarSaludo()
