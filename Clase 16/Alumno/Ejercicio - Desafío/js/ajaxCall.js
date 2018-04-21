var ajaxCall = (function(){
  var exposed ={}

  exposed.getPlanets = function (url ,callBack){
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
