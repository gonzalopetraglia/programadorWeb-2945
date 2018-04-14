function validateFields(){
  var submitButton = $('#submitButton')
  var invalids = $('.is-invalid').length
  if(invalids>=1){
    submitButton.attr('disabled',true)
  }
  else {
    submitButton.attr('disabled',false)
  }
}

var inputFirstName = $('#firstName, #comments')

inputFirstName.blur(function (event) {
  var inputTextNode = $(this)
  var value = inputTextNode.val()
  if (value) {
    inputTextNode.removeClass('is-invalid')
    inputTextNode.addClass('is-valid')
    inputTextNode.next().remove()
  } else {
    inputTextNode.removeClass('is-valid')
    inputTextNode.addClass('is-invalid')
    inputTextNode.next().remove()
    var parentNode = inputTextNode.parent()
    parentNode.append('<p>Campo vacio</p>')
  }
  validateFields()
})

var inputEmail = $('#email')

inputEmail.blur(function (event) {
  var inputEmailNode = $(this)
  var value = inputEmailNode.val()

  if(!value || value.indexOf('@')===-1 || value.indexOf('.')===-1){
    inputEmailNode.removeClass('is-valid')
    inputEmailNode.addClass('is-invalid')
    inputEmailNode.next().remove()
    var errorText= ''
    if(!value){
      errorText= errorText + ' Campo vacio.'
    }
    if(value.indexOf('@')===-1){
      errorText= errorText + ' Campo sin arroba.'
    }
    if(value.indexOf('.')===-1){
      errorText= errorText + ' Campo sin punto.'
    }
    var parentNode = inputEmailNode.parent()
    parentNode.append('<p>'+errorText+'</p>')
  }
  else {
    inputEmailNode.removeClass('is-invalid')
    inputEmailNode.addClass('is-valid')
    inputEmailNode.next().remove()
  }
  validateFields()
})
