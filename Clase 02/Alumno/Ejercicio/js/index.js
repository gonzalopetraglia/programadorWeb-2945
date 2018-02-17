
var dias=['Lunes','Martes','Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']
for (var i = 0; i < dias.length; i++) {
  if(dias[i]==='Sabado' || dias[i]==='Domingo'){
    console.log('El dia '+dias[i]+' es fin de semana')
  }
}
