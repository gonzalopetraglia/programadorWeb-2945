var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']


function pasarAMayusculas(texto){
  if(typeof texto ==='string'){
    return texto.toUpperCase()
  }
}

function agregarAlumno(){
  var name
  do {
     name=prompt('Ingrese el nombre')
  } while (!name)
  var res = pasarAMayusculas(name)
  studentsList.push(res)
}

function guardarAlumnosEnLocalStorage(){
  if(localStorage.getItem('alumnos')){
    var localStorageAlumnos = localStorage.getItem('alumnos')
    studentsList = JSON.parse(localStorageAlumnos)
  }
  agregarAlumno()
  if (studentsList && Array.isArray(studentsList)) {
    var stringfiedStudentsList = JSON.stringify(studentsList)
    localStorage.setItem('alumnos',stringfiedStudentsList)
  }
}

guardarAlumnosEnLocalStorage()
