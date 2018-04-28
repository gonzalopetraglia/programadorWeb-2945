$(document).ready(function(){

  $('#root').load('../partials/home.html').fadeIn(300)

  $('#home').click(function () {
    $('#root').fadeOut(300,function () {
      $('#root').load('../partials/home.html').fadeIn(300)
    })
  })

  $('#people').click(function () {
    $('#root').fadeOut(300,function () {
      $('#root').load('../partials/people.html', peopleController).fadeIn(300)
    })
  })

  $('#localStorage').click(function () {
    $('#root').fadeOut(300,function () {
      $('#root').load('../partials/local-storage.html', localStorageController).fadeIn(300)
    })
  })

  $('#contact').click(function () {
    $('#root').fadeOut(300,function () {
      $('#root').load('../partials/contact.html', contactController).fadeIn(300)
    })
  })

  $('#search').click(function () {
    $('#root').fadeOut(300,function () {
      $('#root').load('../partials/search.html', searchController).fadeIn(300)
    })
  })

})
