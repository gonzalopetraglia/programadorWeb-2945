var localStorageController = function () {
  var row = 1

  $(document).ready(function (){

     peopleList = uploadLocalStorage()
     showSavedPeople()
  })


  function showSavedPeople(){
    var tableBody = $('#tableBody')
    for (var i = 0; i < peopleList.length; i++) {
      tableBody.append('<tr>'
                        +'<th scope="row">'+row+'</th>'
                        +'<td>'+peopleList[i].name+'</td>'
                        +'<td>'+peopleList[i].gender.replace('female','Mujer').replace('male','Hombre').replace('n/a','No aplica').replace('hermaphrodite','Hermafrodita').replace('none','Ninguno')+'</td>'
                        +'<td>'+peopleList[i].height.replace('unknown','?')+' cm</td>'
                        +'<td>'+peopleList[i].mass.replace('unknown','?')+' kg</td>'
                        +'<td>'+peopleList[i].eye_color.replace('blue-gray','Azul grisáceo').replace('blue','Azul').replace('yellow','Amarillo').replace('red','Rojo').replace('brown','Marron').replace('orange','Naranja').replace('black','Negro').replace('hazel','Avellana').replace('pink','Rosa').replace('white','Blanco').replace('gold','Dorado').replace('unknown','Desconocido').replace('green','Verde').replace('dark','Oscuro')+'</td>'
                        +'<td><button type="button" class="btn btn-danger" index="'+peopleList[i].name+'">Eliminar</button></td>'
                      +'</tr>')
      row++
    }
    $('.btn-danger').on('click',function (){
        var buttonNode = $(this)
        var name = buttonNode.attr('index')
        deletePeopleByName(name)
        buttonNode.parent().parent().remove()
    })
  }

}
