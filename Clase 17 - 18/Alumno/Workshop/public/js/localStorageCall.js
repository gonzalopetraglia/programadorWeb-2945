var peopleList = uploadLocalStorage()

function uploadLocalStorage(){
  if(localStorage.getItem('people')){
    var peopleLocalStorage = localStorage.getItem('people')
    var peopleListParse = JSON.parse(peopleLocalStorage)
    return peopleListParse
  }
  else{
    return []
  }
}

function updateLocalStorage(peopleList){
  if (peopleList && Array.isArray(peopleList)) {
    var stringfiedPeopleList = JSON.stringify(peopleList)
    localStorage.setItem('people',stringfiedPeopleList)
  }
}

function savePeople(error, data){
  if(!error){
    peopleList = uploadLocalStorage()
    peopleList.push(data)
    updateLocalStorage(peopleList)
  }else{
    console.log('error', error);
  }
}

function savePeopleList(error, data){
  if(!error){
    peopleList = uploadLocalStorage()
    if(data && data.count>0){
      peopleList.push(data.results[0])
    }
    updateLocalStorage(peopleList)
  }else{
    console.log('error', error);
  }
}

function searchPeoplebyName(name){
  peopleList = uploadLocalStorage()
  var textUpper = name.toUpperCase()
  var index = 0
  var peopleExist = []
  for(var i=0;i<peopleList.length;i++){
    var people= peopleList[i]
    var nameUpper = people.name.toUpperCase()
    if(nameUpper.indexOf(textUpper)!== -1){
      peopleExist[index] = i
      index++
    }
  }
  return peopleExist
}

function deletePeopleByName(name){
    var people = searchPeoplebyName(name)
    for (var i = 0; i < people.length; i++) {
      peopleList.splice(people[i],1)
    }
    updateLocalStorage(peopleList)
}
