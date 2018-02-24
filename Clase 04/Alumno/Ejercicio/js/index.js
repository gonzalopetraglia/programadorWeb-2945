function promedio(notas){
  var total=0
  for(var i=0; i< notas.length;i++){
    total=total+notas[i]
  }
  return total/notas.length
}

function datosAlumno(alumno){
  console.log(alumno && alumno.firstName+',',

    alumno.lastName+',',

    'DNI:'+alumno.dni+',',

    'Promedio: '+ promedio(alumno.examResults)+',',

     'Direccion:',alumno.address && alumno.address.street+' '+alumno.address.number);
}

function buscarAlumno(name, alumnos){
  var seEncontro=false
  for(var i=0;i<alumnos.length;i++){
    if(name===alumnos[i].firstName){
      datosAlumno(alumnos[i])
      seEncontro=true
      break
    }
  }
  if(!seEncontro){
    console.log('No hay resultado')
  }
}




var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
var prom = promedio(examResults)
console.log(prom);

var student = {
  firstName: 'Laura',
  lastName: 'Lopez',
  dni: 45678987,
  address:{
    street: 'Cucha cucha',
    number: 1234
  },
  examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
}
datosAlumno(student)


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

var name= prompt('Ingrese el nombre del alumno')
buscarAlumno(name,students)
