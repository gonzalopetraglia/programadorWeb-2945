var Ajax = (function () {
  var exposed = {}

  exposed.get = function (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  exposed.post = function (url, data, cbk) {
    $.ajax(url, {
      data: data
    })
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  return exposed
})()
