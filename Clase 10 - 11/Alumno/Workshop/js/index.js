var studentsList = uploadStudents()

function uploadStudents(){
  var students =  uploadLocalStorage()
  for (var i = 0; i < students.length; i++) {
    appendStudent('mainList', students[i].firstName,students[i].lastName, students[i].email, students[i].dni)
  }
  return students
}

function uploadLocalStorage(){
  if(localStorage.getItem('students')){
    var localStorageAlumnos = localStorage.getItem('students')
    var studentsListParse = JSON.parse(localStorageAlumnos)
    return studentsListParse
  }
  else{
    return []
  }
}

function updateLocalStorage(){
  if (studentsList && Array.isArray(studentsList)) {
    var stringfiedStudentsList = JSON.stringify(studentsList)
    localStorage.setItem('students',stringfiedStudentsList)
  }
}

function appendStudent(listContainerId, firstName, lastName, email, dni){
  var listContainer = document.getElementById(listContainerId)
  var li = document.createElement('li')
  li.id = dni
  li.className = "list-group-item"
  var h1 = document.createElement('h1')
  h1.innerHTML = firstName +' '+ lastName
  li.appendChild(h1)
  var pEmail = document.createElement('p')
  pEmail.innerHTML = 'E-mail = ' + email
  li.appendChild(pEmail)
  var pDNI = document.createElement('p')
  pDNI.innerHTML = 'DNI = ' + dni
  li.appendChild(pDNI)
  listContainer.appendChild(li)
}

function removeStudent(listContainerId, id){
  var listContainer = document.getElementById(listContainerId)
  var li = document.getElementById(id)
  listContainer.removeChild(li)
}

function searchStudentByDni(dni){
  var index= -1
  for(var i=0;i<studentsList.length;i++){
    var student= studentsList[i]
    if(student.dni === dni){
      index= i
      break;
    }
  }
  return index
}

function searchStudentsByText(text){
  var textUpper = text.toUpperCase()
  var index = 0
  var students = []
  for(var i=0;i<studentsList.length;i++){
    var student= studentsList[i]
    var firstNameUpper = student.firstName.toUpperCase()
    var lastNameUpper = student.lastName.toUpperCase()
    if(firstNameUpper.indexOf(textUpper)!== -1 || lastNameUpper.indexOf(textUpper)!== -1){
      students[index] = student
      index++
    }
  }
  return students
}

function cleanStudentList(listContainerId){
  var listContainer = document.getElementById(listContainerId)
  while(listContainer.children.length>0){
    listContainer.removeChild(listContainer.children[0])
  }
}


function validateAddStudentFields(){
  var submitButton = document.getElementById('addStudentButton')
  if(dniInput.classList.contains('is-valid') && firstNameInput.classList.contains('is-valid') && lastNameInput.classList.contains('is-valid') && emailInput.classList.contains('is-valid')){
    submitButton.disabled=false
  }
  else {
    submitButton.disabled=true
  }
}

function validateDeleteStudentFields(){
  var submitButton = document.getElementById('deleteStudentButton')
  if(deleteDniInput.classList.contains('is-valid')){
    submitButton.disabled=false
  }
  else {
    submitButton.disabled=true
  }
}

function validateSearchTextFields(){
  var submitButton = document.getElementById('searchStudentButton')
  if(searchTextInput.classList.contains('is-valid')){
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


var firstNameInput = document.getElementById('firstName')
firstNameInput.onblur = function (event) {validateFirstNameInput(event)}
firstNameInput.onmouseleave = function (event) {validateFirstNameInput(event)}

function validateFirstNameInput(event) {
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
    firstNameErrorNode.innerHTML = 'ERROR: Campo nombre vacio.'
    parentTextInputNode.appendChild(firstNameErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAddStudentFields()
}


var lastNameInput = document.getElementById('lastName')
lastNameInput.onblur = function (event) {validateLastNameInput(event)}
lastNameInput.onmouseleave = function (event) {validateLastNameInput(event)}

function validateLastNameInput(event) {
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
    lastNameErrorNode.innerHTML = 'ERROR: Campo apellido vacio.'
    parentTextInputNode.appendChild(lastNameErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAddStudentFields()
}


var emailInput = document.getElementById('email')
emailInput.onblur = function (event) {validateEmailInput(event)}
emailInput.onmouseleave = function (event) {validateEmailInput(event)}

function validateEmailInput(event) {
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
  validateAddStudentFields()
}


var dniInput = document.getElementById('dni')
dniInput.onblur = function (event) {validateDniInput(event)}
dniInput.onmouseleave = function (event) {validateDniInput(event)}

function validateDniInput(event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  dniErrorInputNode = document.getElementById("dniErrorNode")
  if(dniErrorInputNode){
    parentTextInputNode.removeChild(dniErrorInputNode)
  }

  var number = parseNumber(value)
  var index = searchStudentByDni(number)
  if(!value || !number || number < 0 || index !== -1){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' Campo DNI vacio.'
    }
    if(!number || number < 0){
      errorText= errorText + ' No es un numero valido.'
    }
    if(index !== -1){
      errorText= errorText + ' DNI ya existe.'
    }

    var dniErrorNode = document.createElement('span')
    dniErrorNode.id="dniErrorNode"
    dniErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(dniErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateAddStudentFields()
}


var addStudentButton = document.getElementById('addStudentButton')

addStudentButton.onclick = function (event) {
  var student = {
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    email: emailInput.value,
    dni: parseInt(dniInput.value,10)
  }
  studentsList.push(student)
  updateLocalStorage()
  appendStudent('mainList', student.firstName, student.lastName, student.email, student.dni)
  firstNameInput.value=""
  firstNameInput.classList.remove('is-invalid')
  firstNameInput.classList.remove('is-valid')
  lastNameInput.value=""
  lastNameInput.classList.remove('is-invalid')
  lastNameInput.classList.remove('is-valid')
  emailInput.value=""
  emailInput.classList.remove('is-invalid')
  emailInput.classList.remove('is-valid')
  dniInput.value=""
  dniInput.classList.remove('is-invalid')
  dniInput.classList.remove('is-valid')
  validateAddStudentFields()
}


var deleteDniInput = document.getElementById('deleteDni')
deleteDniInput.onblur = function (event) {validateDeleteDniInput(event)}
deleteDniInput.onmouseleave = function (event) {validateDeleteDniInput(event)}

function validateDeleteDniInput(event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  deleteDniErrorInputNode = document.getElementById("deleteDniErrorNode")
  if(deleteDniErrorInputNode){
    parentTextInputNode.removeChild(deleteDniErrorInputNode)
  }

  var number = parseNumber(value)
  var index = searchStudentByDni(number)
  if(!value || !number || number < 0 || index == -1){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var errorText= 'ERROR: '
    if(!value){
      errorText= errorText + ' Campo DNI vacio.'
    }
    if(!number || number < 0){
      errorText= errorText + ' No es un numero valido.'
    }
    if(index == -1){
      errorText= errorText + ' DNI no existe.'
    }

    var deleteDniErrorNode = document.createElement('span')
    deleteDniErrorNode.id="deleteDniErrorNode"
    deleteDniErrorNode.innerHTML = errorText
    parentTextInputNode.appendChild(deleteDniErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateDeleteStudentFields()
}


var deleteStudentButton = document.getElementById('deleteStudentButton')

deleteStudentButton.onclick = function (event) {
  var dni = parseInt(deleteDniInput.value,10)
  var index = searchStudentByDni(dni)
  if(index !== -1){
    studentsList.splice(index,1)
  }
  updateLocalStorage()
  removeStudent('mainList',dni)
  deleteDniInput.value=""
  deleteDniInput.classList.remove('is-invalid')
  deleteDniInput.classList.remove('is-valid')
  validateDeleteStudentFields()
}


var searchTextInput = document.getElementById('searchText')
searchTextInput.onblur = function (event) {validateSearchTextInput(event)}
searchTextInput.onmouseleave = function (event) {validateSearchTextInput(event)}

function validateSearchTextInput(event) {
  var textInputNode = event.target
  var value = textInputNode.value
  var parentTextInputNode = textInputNode.parentElement
  searchTextErrorInputNode = document.getElementById("searchTextErrorNode")
  if(searchTextErrorInputNode){
    parentTextInputNode.removeChild(searchTextErrorInputNode)
  }
  if(!value){
    textInputNode.classList.remove('is-valid')
    textInputNode.classList.add('is-invalid')

    var searchTextErrorNode = document.createElement('span')
    searchTextErrorNode.id="searchTextErrorNode"
    searchTextErrorNode.innerHTML = 'ERROR: Campo vacio.'
    parentTextInputNode.appendChild(searchTextErrorNode)
  }
  else {
    textInputNode.classList.remove('is-invalid')
    textInputNode.classList.add('is-valid')
  }
  validateSearchTextFields()
}


var searchStudentButton = document.getElementById('searchStudentButton')

searchStudentButton.onclick = function (event) {
  cleanStudentList('searchList')
  var text = searchTextInput.value
  var students = searchStudentsByText(text)
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    appendStudent('searchList', student.firstName, student.lastName, student.email, student.dni)
  }
}
