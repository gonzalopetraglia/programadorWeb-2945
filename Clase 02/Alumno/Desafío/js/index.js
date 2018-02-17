
var dia= prompt('Ingrese un dia de la semana')

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
    console.log('No es fin de semana')
    break;
  case 'Sabado':
  case 'Domingo':
  case 'sabado':
  case 'domingo':
      console.log('Es fin de semana')
    break;
  default:
    console.log('Dia incorrecto')
    break;
}
