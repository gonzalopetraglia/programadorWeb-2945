function validateAllFields(){
  var submitButton = document.getElementById('submitButton')
  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')
  if(elementsWithIsInvalid && elementsWithIsInvalid.length === 0){
    submitButton.disabled=false
  }
  else {
    submitButton.disabled=true
  }
}

var firstNameInput = document.getElementById('firstNameInput')

firstNameInput.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  firstNameErrorInputNode = document.getElementById("firstNameErrorNode")
  if(firstNameErrorInputNode){
    parentTextInputNode.removeChild(firstNameErrorInputNode)
  }
  if(!value){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var firstNameErrorNode = document.createElement('span')
    firstNameErrorNode.id="firstNameErrorNode"
    firstNameErrorNode.innerHTML = 'ERROR: Campo nombre vacio'
    parentTextInputNode.appendChild(firstNameErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}

var lastNameInput = document.getElementById('lastNameInput')

lastNameInput.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  lastNameErrorInputNode = document.getElementById("lastNameErrorNode")
  if(lastNameErrorInputNode){
    parentTextInputNode.removeChild(lastNameErrorInputNode)
  }
  if(!value){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var lastNameErrorNode = document.createElement('span')
    lastNameErrorNode.id="lastNameErrorNode"
    lastNameErrorNode.innerHTML = 'ERROR: Campo apellido vacio'
    parentTextInputNode.appendChild(lastNameErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}

var emailInput = document.getElementById('emailInput')

emailInput.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  emailErrorInputNode = document.getElementById("emailErrorNode")
  if(emailErrorInputNode){
    parentTextInputNode.removeChild(emailErrorInputNode)
  }
  if(!value || value.indexOf('@')===-1 || value.indexOf('.')===-1){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')
    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' campo email vacio.'
    }
    if(value.indexOf('@')===-1){
      errorText= errorText + ' campo email sin arroba.'
    }
    if(value.indexOf('.')===-1){
      errorText= errorText + ' campo email sin punto.'
    }

    var emailErrorInputNode = document.createElement('span')
    emailErrorInputNode.id="emailErrorNode"
    emailErrorInputNode.innerHTML = errorText
    parentTextInputNode.appendChild(emailErrorInputNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}
