var objectList = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]

gestionarArray()

function pasarAMayusculas(texto){
  if(typeof texto ==='string'){
    return texto.toUpperCase()
  }
}

function buscarAlumno(name){
  var nameUpper = pasarAMayusculas(name)
  var index= -1
  for(var i=0;i<objectList.length;i++){
    var student= objectList[i]
    var nombre = pasarAMayusculas(student.firstName)
    var apellido = pasarAMayusculas(student.lastName)
    if(nombre.indexOf(nameUpper)!== -1 || apellido.indexOf(nameUpper)!== -1){
      index= i
      break;
    }
  }
  return index
}

function agregarAlumno(){
  var nombre
  do {
     nombre=prompt('Ingrese el nombre')
  } while (!nombre)
  var apellido
  do {
     apellido=prompt('Ingrese el apellido')
  } while (!apellido)
  var res = { firstName: nombre, lastName: apellido }
  objectList.push(res)
  console.log('El alumno '+ nombre +' '+ apellido +' fue agregado');
}

function eliminarAlumno(){
  var name
  do {
     name=prompt('Ingrese el nombre o apellido de un alumno a eliminar')
  } while (!name)
  var nameUpper = pasarAMayusculas(name)
  var index= buscarAlumno(nameUpper)
  if(index !== -1){
    objectList.splice(index,1)
    console.log('El alumno '+ name +' fue eliminado');
  }else{
    console.log('El alumno '+ name +' no existe');
  }
}

function gestionarArray(){
  do {
    var tarea=prompt('Ingrese la tarea a realizar (buscar/agregar/eliminar)')
  } while (pasarAMayusculas(tarea)!='BUSCAR' && pasarAMayusculas(tarea)!='AGREGAR' && pasarAMayusculas(tarea)!='ELIMINAR');
  switch (pasarAMayusculas(tarea)) {
    case 'BUSCAR':
      var name
      do {
         name=prompt('Ingrese el nombre o apellido del alumno a buscar')
      } while (!name)
      var res = buscarAlumno(name)
      if(res!== -1){
        console.log('El alumno esta en la posicion: '+res);
      }else{
        console.log('El alumno no existe');
      }
      break;
    case 'AGREGAR':
      agregarAlumno()
      console.log(objectList);
      break;
    case 'ELIMINAR':
      eliminarAlumno()
      console.log(objectList);
      break;
    default:
      alert('funcion inexistente')
  }
}
