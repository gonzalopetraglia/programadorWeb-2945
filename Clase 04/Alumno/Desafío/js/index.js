function promedio(notas){

  var total=0
  for(var i=0; i< notas.length;i++){
    total=total+notas[i]
  }
  return total/notas.length
}

function parseNumber(){
  var number = prompt('Ingrese un numero')
  var parseNumber = parseInt(number,10)
  if(isNaN(parseNumber)){
    return false
  }
  return parseNumber
}

function datosAlumno(alumno){
  console.log(alumno && alumno.firstName+',',

    alumno.lastName+',',

    'DNI:'+alumno.dni+',',

    'Promedio: '+ promedio(alumno.examResults)+',',

     'Direccion:',alumno.address && alumno.address.street, alumno.address && alumno.address.number);
}

function buscarAlumnoPorNombreOApellido(name){
  var seEncontro=false
  for(var i=0;i<students.length;i++){
    if(name===students[i].firstName||name===students[i].lastName){
      datosAlumno(students[i])
      seEncontro=true
    }
  }
  if(!seEncontro){
    console.log('No hay resultado')
  }
}
function buscarAlumnosPorPromedio(prom){
var seEncontro=false
  for(var i=0;i<students.length;i++){
    if(prom <= promedio(students[i].examResults)){
      datosAlumno(students[i])
      seEncontro=true
    }
  }
  if(!seEncontro){
    console.log('No hay resultado')
  }
}


var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address:{
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address:{
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address:{
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
    address:{
      street: 'Zapiol',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
    address:{
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

var promedioAlumno = parseNumber()
if(promedioAlumno===false){
  console.log('Se ingreso un promedio incorrecto');
}else{
  buscarAlumnosPorPromedio(promedioAlumno)
}

var textAlumno = prompt('Ingrese el nombre o apellido del alumno')
buscarAlumnoPorNombreOApellido(textAlumno)
