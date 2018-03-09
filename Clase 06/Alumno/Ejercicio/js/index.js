
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']

gestionarArray()

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
    if(student.indexOf(nameUpper)!== -1){
      index= i
      break;
    }
  }
  return index
}

function agregarAlumno(){
  var name
  do {
     name=prompt('Ingrese el nombre')
  } while (!name)
  var res = pasarAMayusculas(name)
  studentsList.push(res)
}

function eliminarAlumno(name){
  debugger
  var index= buscarAlumno(name)
  if(index !== -1){
    studentsList.splice(index,1)
    console.log('Alumno eliminado');
  }else{
    console.log('Alumno inexistente');
  }
}

function gestionarArray(){
  do {
    var tarea=prompt('Ingrese la tarea a realizar (buscar/agregar/eliminar)')
  } while (pasarAMayusculas(tarea)!='BUSCAR' && pasarAMayusculas(tarea)!='AGREGAR' && pasarAMayusculas(tarea)!='ELIMINAR');
  switch (pasarAMayusculas(tarea)) {
    case 'BUSCAR':
      var name= prompt('Ingrese el nombre de un alumno a buscar')
      var res = buscarAlumno(name)
      if(res!== -1){
        console.log('El alumno ' +name+ ' esta en la posicion: '+res);
      }else{
        console.log('El alumno ' +name+ ' no existe');
      }
      break;
    case 'AGREGAR':
      agregarAlumno()
      console.log('El alumno fue agregado');
      console.log(studentsList);
      break;
    case 'ELIMINAR':
      var name= prompt('Ingrese el nombre de un alumno a eliminar')
      eliminarAlumno(name)
      break;
    default:
      alert('funcion inexistente')
  }
}
