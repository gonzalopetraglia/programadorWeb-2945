var ajaxCall = (function(){
  var exposed ={}

  exposed.getPeople = function (url ,callBack){
    $.ajax( url )
      .done(function(data) {
        callBack(null,data)
      })
      .fail(function(error) {
        callBack(error)
      })
  }

  return exposed
})()
