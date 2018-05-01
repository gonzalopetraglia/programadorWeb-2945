var searchController = function () {
  var searchInput = $('#searchInput')

  var searchValue = searchInput.val()

  var totalRows = 1

  var url = 'https://swapi.co/api/people/?search=' + searchValue

  getPeople()

  var fullLocalList = LocalStorage.getFullList()

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
          'es',
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
