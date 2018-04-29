var peopleController = function (pageLanguage) {
  var url = 'https://swapi.co/api/people/'
  var totalRows = 1
  var fullLocalList = LocalStorage.getFullList()
  getPeople()
  var seeMoreButton = $('#seeMore').click(getPeople)
  function getPeople () {
    Ajax.get(url, function (error, data) {
      if (error) {
        console.log('Error', error)
      } else {
        TableManager.appendCaracters(
          data.results,
          totalRows,
          'add',
          pageLanguage,
          fullLocalList
        )
        if (data.next) {
          url = data.next
          totalRows = totalRows + 10
        } else {
          seeMoreButton.attr('disabled', true)
        }
      }
    })
  }
}
