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

function promedio(notas){
  var total=0
  for(var i=0; i< notas.length;i++){
    total=total+notas[i]
  }
  return total/notas.length
}

 function appendAlumn(nombre, apellido, dni, promedio){
   var listContainer = document.getElementById('list')
   var li = document.createElement('li')
   li.id = dni
   li.className = "list-group-item"
   var h1 = document.createElement('h1')
   h1.innerHTML = nombre + ' ' + apellido
   li.appendChild(h1)
   var pDNI = document.createElement('p')
   pDNI.innerHTML = 'DNI= ' + dni
   li.appendChild(pDNI)
   var pPromedio = document.createElement('p')
   pPromedio.innerHTML = 'Promedio= ' + promedio
   li.appendChild(pPromedio)
   listContainer.appendChild(li)
 }

 function AgregarAlumnos(){
   for (var i = 0; i < students.length; i++) {
     var student = students[i]
     appendAlumn(student.firstName,student.lastName,student.dni, promedio(student.examResults))
   }
 }

var rootContainer = document.getElementById('root')
rootContainer.innerHTML = '<ul id ="list" class="list-group"></ul>'
AgregarAlumnos()
