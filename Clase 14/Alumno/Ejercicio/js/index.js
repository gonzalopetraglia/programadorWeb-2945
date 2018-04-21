$(document).ready(function (event) {

   $(window).keydown(function (event) {
     var keyPress = event.which
     var counter = $('#counter')
     if (keyPress === 13) {
       counter.html('0')
     }
     if (keyPress === 38) {
       var value = parseInt(counter.html(), 10)
       counter.html(value+1)
     }
     if (keyPress === 40) {
       var value = parseInt(counter.html(), 10)
       counter.html(value-1)
     }
   })

 })
