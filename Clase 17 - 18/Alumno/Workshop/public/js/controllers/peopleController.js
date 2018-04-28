var peopleController = function () {
  var url = 'https://swapi.co/api/people/'
  var row = 1
  var index = 1

  $(document).ready(function (){

     ajaxCall.getPeople(url, showPeople)

  })

  function showPeople(error, data){
    if(!error){
      var people = data.results
      var tableBody = $('#tableBody')
      for (var i = 0; i < people.length; i++) {
        if(searchPeoplebyName(people[i].name).length===0){
          tableBody.append('<tr>'
                            +'<th scope="row">'+row+'</th>'
                            +'<td>'+people[i].name+'</td>'
                            +'<td>'+people[i].gender.replace('female','Mujer').replace('male','Hombre').replace('n/a','No aplica').replace('hermaphrodite','Hermafrodita').replace('none','Ninguno')+'</td>'
                            +'<td>'+people[i].height.replace('unknown','?')+' cm</td>'
                            +'<td>'+people[i].mass.replace('unknown','?')+' kg</td>'
                            +'<td>'+people[i].eye_color.replace('blue-gray','Azul grisáceo').replace('blue','Azul').replace('yellow','Amarillo').replace('red','Rojo').replace('brown','Marron').replace('orange','Naranja').replace('black','Negro').replace('hazel','Avellana').replace('pink','Rosa').replace('white','Blanco').replace('gold','Dorado').replace('unknown','Desconocido').replace('green','Verde').replace('dark','Oscuro')+'</td>'
                            +'<td><button type="button" class="btn btn-success" index="'+index+'">Guardar</button></td>'
                          +'</tr>')
          row++
        }
        index++
      }
      $('.btn-success').on('click',function (){
          var buttonNode = $(this)
          var index = buttonNode.attr('index')
          ajaxCall.getPeople(url+index+'/', savePeople)
          buttonNode.parent().parent().remove()
      })
      if(data.next){
        $('#seeMore').one('click',function(){
          ajaxCall.getPeople(data.next,showPeople)
        })
      }
      else{
        console.log('No hay mas personajes');
        $('#seeMore').attr('disabled',true)
      }
    }else{
      console.log('error', error);
    }
  }

}
