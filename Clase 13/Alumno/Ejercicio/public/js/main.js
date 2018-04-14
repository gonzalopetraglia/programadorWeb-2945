$(document).ready(function(){

  $('#home').click(function () {
    $('#root').load('../partials/home.html', function () {
      console.log('Load partial home')
    })
  })

  $('#people').click(function () {
    $('#root').load('../partials/people.html', function () {
      console.log('Load partial people')
    })
  })

  $('#localStorage').click(function () {
    $('#root').load('../partials/localStorage.html', function () {
      console.log('Load partial localStorage')
    })
  })

  $('#contact').click(function () {
    $('#root').load('../partials/contact.html', function () {
      console.log('Load partial contact')
    })
  })

})
