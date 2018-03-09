// //Strings

// // lenght: cantidad de caracateres en el string
// var firstName = "Juan"
// console.log(firstName.length)
//
// //typeof me dice que tipo de variable es (string/number/function/object/undefined/boolean/symbol) si es null devuelve tipo object
// var firstName = "Juan"
// if(typeof firstName == 'string'){
//   console.log('es un string');
// }
//
// //toString : convierte a string
// var numero = 345
// if(typeof numero === 'number'){
//   numero = numero.toString()
// }
// if(typeof numero === 'string'){
//   console.log('ya es un texto');
// }
//
// //toLowerCase: convierte el string en minuscula
// //toUpperCase: convierte el string en mayuscula
// var texto = "HOLA"
// if(typeof texto === 'string'){
//   texto.toLowerCase()
// }
// console.log(texto);
//
//
// //indexOf me da la posicion del caracter o el string que especifique
// var email= 'gonzalo.petraglia@gmail.com'
// if(typeof email === 'string'){
//   if(email.indexOf('@')!== -1 && email.indexOf('.')!== -1){
//     console.log('Mail incorrecto');
//   }
// }
// //en este caso se busca un pedazo de string ... si ingreso Mar nos va a dar cierto
// var name= prompt('Ingrese Nombre')
// var dbName = 'Martin' // un supuesto dato que ya esta ingresado en la base de datos
// if(typeof name === 'string'){
//   if(dbName.indexOf(name) !== -1){
//     console.log('Es el usuario');
//   }else{
//     console.log('No es el usuario');
//   }
// }

// //Split: separa el string por el texto que le pase por ejemplo un espacio y me crea un array con las partes separadas
// var texto="hola como estas gonzalo"
// var res = texto.split(' ')
// console.log(res[1]);

// //Arrays

 // //Para validar si es un array
 // var names = ['Gonzalo', 'Javier', 'Ines']
 // if(Array.isArray(names)){
 //   console.log('Es un Array');
 // }

 // //toString: convierte todo el array en un string separado por comas
 // var names = ['Gonzalo', 'Javier', 'Ines']
 // console.log(names.toString());

 // //Join: convierte todo el array en un string separado por el texto que le pasemos
 // var names = ['Gonzalo', 'Javier', 'Ines']
 // console.log(names.join('/'));

// //Push: agrega una instancia al array
//   var names = ['Gonzalo', 'Javier', 'Ines']
//   names.push('Martin')
//   console.log(names);

// // Splice: elimina del array dandole una posicion y cantidad a eliminar en este caso desde la poscion 1 elimina 1 lugar
//   var names = ['Gonzalo', 'Javier', 'Ines']
//   names.splice(1,1)
//   console.log(names);

  // //Splice y IndexOf: para sacar una posicion en particular usamos indexOf
  // var names = ['Gonzalo', 'Javier', 'Ines']
  // var name = 'Gonzalo'
  // var index= names.indexOf(name)
  // names.splice(index,1)
  // console.log(names);

  
