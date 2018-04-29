$(document).ready(function () {
  var pageLanguage = 'es'
  loadWithAnimation('../partials/home.html')
  $('#home').click(function () {
    loadWithAnimation('../partials/home.html')
  })
  $('#people').click(function () {
    loadWithAnimation('../partials/people.html', function () {
      peopleController(pageLanguage)
    })
  })
  $('#localStorage').click(function () {
    loadWithAnimation('../partials/local-storage.html', localStorageController)
  })
  $('#contact').click(function () {
    loadWithAnimation('../partials/contact.html', contactController)
  })
  $('#searchButton').click(function () {
    loadWithAnimation('../partials/search.html', searchController)
  })
  $('#language').change(function () {
    var value = $(this).val()
    pageLanguage = value
  })
})

function loadWithAnimation (route, controller) {
  $('#root').fadeOut(300, function () {
    $('#root').load(route, controller).fadeIn(300)
  })
}
