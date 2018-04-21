var url = 'https://swapi.co/api/planets/'

$(document).ready(function (){

   ajaxCall.getPlanets(url, showPlanetsName)

})


function showPlanetsName(error, data){
  if(!error){
    var planets = data.results
    var tableBody = $('#tableBody')
    for (var i = 0; i < planets.length; i++) {
      console.log(planets[i].name);
      tableBody.append('<tr>'
                        +'<td>'+planets[i].name+'</td>'
                      +'</tr>')
    }
    if(data.next){
      $('#showMore').one('click',function(){
        ajaxCall.getPlanets(data.next,showPlanetsName)
      })
    }
    else{
      console.log('No hay mas planetas');
      $('#showMore').attr('disabled',true)
    }
  }else{
    console.log('error', error);
  }
}
