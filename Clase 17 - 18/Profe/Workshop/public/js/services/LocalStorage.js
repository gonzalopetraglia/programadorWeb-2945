var LocalStorage = (function () {
  var exposed = {}

  exposed.saveCaracter = function (caracter) {
    var savedList = getLocalStorage()

    var index = searchByUrl(caracter.url, savedList)

    if (index === -1) {
      savedList.push(caracter)
      putLocalStorage(savedList)
    }
  }

  exposed.deleteCaracter = function (url) {
    var savedList = getLocalStorage()

    var index = searchByUrl(url, savedList)

    if (index !== -1) {
      savedList.splice(index, 1)
      putLocalStorage(savedList)
    }
  }

  exposed.getFullList = function () {
    return getLocalStorage()
  }

  exposed.searchUrl = function (url, savedList) {
    return searchByUrl(url, savedList)
  }

  function searchByUrl (url, savedList) {
    console.log(url, savedList)
    var index = -1
    for (var i = 0; i < savedList.length; i++) {
      var caracter = savedList[i]
      if (caracter.url === url) {
        index = i
        break
      }
    }
    return index
  }

  function getLocalStorage () {
    var temporalList = localStorage.getItem('savedList')

    temporalList = temporalList ? JSON.parse(temporalList) : []

    return temporalList
  }

  function putLocalStorage (temporalList) {
    var parsedList = JSON.stringify(temporalList)

    localStorage.setItem('savedList', parsedList)
  }

  return exposed
})()
