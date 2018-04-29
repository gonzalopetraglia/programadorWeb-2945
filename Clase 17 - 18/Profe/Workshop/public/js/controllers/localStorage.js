var localStorageController = function () {
  var totalRows = 1
  var fullLocalList = LocalStorage.getFullList()
  TableManager.appendCaracters(
    LocalStorage.getFullList(),
    totalRows,
    'delete',
    'es',
    fullLocalList
  )
}
