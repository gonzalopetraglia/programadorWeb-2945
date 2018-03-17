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

function parseNumber(number){
  var parseNumber = parseInt(number,10)
  if(isNaN(parseNumber)){
    return false
  }
  return parseNumber
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
      errorText= errorText + ' Campo email vacio.'
    }
    if(value.indexOf('@')===-1){
      errorText= errorText + ' Campo email sin arroba.'
    }
    if(value.indexOf('.')===-1){
      errorText= errorText + ' Campo email sin punto.'
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

var passwordInput = document.getElementById('passwordInput')

passwordInput.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  passwordErrorInputNode = document.getElementById("passwordErrorNode")
  if(passwordErrorInputNode){
    parentTextInputNode.removeChild(passwordErrorInputNode)
  }
  if(!value || value.length < 6 ){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')
    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' Campo contraseña vacio.'
    }
    if(value.length < 6){
      errorText= errorText + ' Campo contraseña deberá tener un mínimo de 6 caracteres.'
    }

    var passwordErrorNode = document.createElement('span')
    passwordErrorNode.id="passwordErrorNode"
    passwordErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(passwordErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}

var passwordInput2 = document.getElementById('passwordInput2')

passwordInput2.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  passwordErrorInputNode = document.getElementById("password2ErrorNode")
  if(passwordErrorInputNode){
    parentTextInputNode.removeChild(passwordErrorInputNode)
  }
  var value2 = document.getElementById("passwordInput").value
  if(!value || value!==value2 ){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')
    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' Campo reingresar contraseña vacio.'
    }
    if(value!==value2){
      errorText= errorText + ' La contraseña no coincide.'
    }

    var passwordErrorNode = document.createElement('span')
    passwordErrorNode.id="password2ErrorNode"
    passwordErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(passwordErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}

var edadInput = document.getElementById('edadInput')

edadInput.onblur = function (event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  edadErrorInputNode = document.getElementById("edadErrorNode")
  if(edadErrorInputNode){
    parentTextInputNode.removeChild(edadErrorInputNode)
  }

  var value2 = parseNumber(value)

  if(!value || value2 === false || value2<18 ){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')
    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' Campo edad vacio.'
    }
    if(value2 === false){
      errorText= errorText + ' No es un numero valido.'
    }
    if(value2 < 18){
      errorText= errorText + ' No es mayor de edad.'
    }

    var edadErrorNode = document.createElement('span')
    edadErrorNode.id="edadErrorNode"
    edadErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(edadErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAllFields()
}
