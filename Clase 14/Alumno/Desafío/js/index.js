$(document).ready(function () {


  $('#firstName, #comments').one('blur',function (){
      var inputNode = $(this)
      validateInputText(inputNode)
  })
  $('#firstName, #comments').on('input',function (){
      var inputNode = $(this)
      validateInputText(inputNode)
  })

  $('#email').one('blur',function (){
      var inputEmailNode = $(this)
      validateInputText(inputEmailNode)
  })
  $('#email').on('input',function (){
      var inputEmailNode = $(this)
      validateInputEmail(inputEmailNode)
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

})

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

function validateInputText(inputNode){
  var value = inputNode.val()
  if (value) {
    inputNode.removeClass('is-invalid')
    inputNode.addClass('is-valid')
    inputNode.next().remove()
  } else {
    inputNode.removeClass('is-valid')
    inputNode.addClass('is-invalid')
    inputNode.next().remove()
    var parentNode = inputNode.parent()
    parentNode.append('<p>Campo vacio</p>')
  }
  validateFields()
}

  function validateInputEmail(inputEmailNode){
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
}
