function Pelicula(titulo, año, director){
  var id = Math.random()
  this.titulo = titulo
  this.año = año
  this.director = director
  this.actores=[]

  this.getTitulo = function () {
    return titulo
  }
  this.setTitulo = function (titulo) {
    this.titulo = titulo
  }

  this.getAño = function () {
    return año
  }
  this.setAño = function (año) {
    this.año = año
  }

  this.getDirector = function () {
    return director
  }
  this.setDirector = function (director) {
    this.director = director
  }

  this.agregarActor = function(name){
    this.actores.push(name)
  }
}

var peli = new Pelicula('8 y 1/2', 1963, ' Federico Fellini')
peli.agregarActor('Marcello Mastroianni')
peli.agregarActor('Claudia Cardinale')
console.log(peli);
