var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

function pasarAMayusculas(texto){
  if(typeof texto ==='string'){
    return texto.toUpperCase()
  }
}

function buscarAlumno(name){
  var nameUpper = pasarAMayusculas(name)
  var index= -1
  for(var i=0;i<studentsList.length;i++){
    var student= studentsList[i]
    var nombre = pasarAMayusculas(student)
    if(nombre.indexOf(nameUpper)!== -1){
      index= i
      break;
    }
  }
  return index
}

function eliminarAlumno(){
  var name
  do {
     name=prompt('Ingrese el nombre de un alumno a eliminar')
  } while (!name)
  var index= buscarAlumno(name)
  if(index !== -1){
    studentsList.splice(index,1)
    console.log('El alumno '+ name +' fue eliminado');
  }else{
    console.log('El alumno '+ name +' no existe');
  }
}

function EliminarAlumnoEnLocalStorage(){
  if(localStorage.getItem('alumnos')){
    var localStorageAlumnos = localStorage.getItem('alumnos')
    studentsList = JSON.parse(localStorageAlumnos)
  }
  eliminarAlumno()
  if (studentsList && Array.isArray(studentsList)) {
    var stringfiedStudentsList = JSON.stringify(studentsList)
    localStorage.setItem('alumnos',stringfiedStudentsList)
  }
}

EliminarAlumnoEnLocalStorage()
