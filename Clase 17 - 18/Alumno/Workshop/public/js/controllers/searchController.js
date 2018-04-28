var searchController = function () {
  var url = 'https://swapi.co/api/people/?search='
  var row = 1
  var index = 1

  $(document).ready(function (){
     var searchInputText = $('#searchInput').val()
     ajaxCall.getPeople(url+searchInputText, showSearchedPeople)

  })

  function showSearchedPeople(error, data){
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
                            +'<td><button type="button" class="btn btn-success" index="'+people[i].name+'">Guardar</button></td>'
                          +'</tr>')

        }
        else{
          tableBody.append('<tr>'
                            +'<th scope="row">'+row+'</th>'
                            +'<td>'+people[i].name+'</td>'
                            +'<td>'+people[i].gender.replace('female','Mujer').replace('male','Hombre').replace('n/a','No aplica').replace('hermaphrodite','Hermafrodita').replace('none','Ninguno')+'</td>'
                            +'<td>'+people[i].height.replace('unknown','?')+' cm</td>'
                            +'<td>'+people[i].mass.replace('unknown','?')+' kg</td>'
                            +'<td>'+people[i].eye_color.replace('blue-gray','Azul grisáceo').replace('blue','Azul').replace('yellow','Amarillo').replace('red','Rojo').replace('brown','Marron').replace('orange','Naranja').replace('black','Negro').replace('hazel','Avellana').replace('pink','Rosa').replace('white','Blanco').replace('gold','Dorado').replace('unknown','Desconocido').replace('green','Verde').replace('dark','Oscuro')+'</td>'
                            +'<td><button type="button" class="btn btn-danger" index="'+people[i].name+'">Eliminar</button></td>'
                          +'</tr>')
        }
        row++
      }
      $('.btn-success').on('click',function (){
          var buttonNode = $(this)
          var name = buttonNode.attr('index')
          if(index!== -1){
            ajaxCall.getPeople(url+name , savePeopleList)
            var node = buttonNode.parent()
            buttonNode.remove()
            node.html('Agregado')
          }
      })
      $('.btn-danger').on('click',function (){
          var buttonNode = $(this)
          var name = buttonNode.attr('index')
          deletePeopleByName(name)
          var node = buttonNode.parent()
          buttonNode.remove()
          node.html('Eliminado')
      })



      if(data.next){
        $('#seeMore').one('click',function(){
          ajaxCall.getPeople(data.next,showSearchedPeople)
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
