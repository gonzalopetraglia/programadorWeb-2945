var isCircle = true

var squares = $('.square')

squares.click(function (event) {
  var square = $(this)
  if(square[0].classList.length<=1){
    if(isCircle){
      square.addClass('cross')
      isCircle = false
    }else{
      square.addClass('circle')
      isCircle = true
    }
  }
})
