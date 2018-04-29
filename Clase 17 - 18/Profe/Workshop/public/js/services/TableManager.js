var TableManager = (function () {
  var exposed = {}

  exposed.appendCaracters = function (
    caracters,
    totalRows,
    type,
    pageLanguage,
    fullLocalList
  ) {
    var tableBody = $('#tableBody')

    for (var i = 0; i < caracters.length; i++) {
      var caracter = caracters[i]
      if (type !== 'delete') {
        var index = LocalStorage.searchUrl(caracter.url, fullLocalList)
        if (index === -1) {
          var caracterRow = createTableRow(
            caracter,
            totalRows + i,
            type,
            pageLanguage
          )
          tableBody.append(caracterRow)
        }
      } else {
        var caracterRow = createTableRow(
          caracter,
          totalRows + i,
          type,
          pageLanguage
        )
        tableBody.append(caracterRow)
      }
    }

    $('.btn-danger').click(function () {
      var caracterRow = $(this).parent().parent()

      LocalStorage.deleteCaracter(this.id)

      caracterRow.remove()
    })

    $('.btn-success').click(function () {
      var caracterRow = $(this).parent().parent()
      for (var i = 0; i < caracters.length; i++) {
        var caracter = caracters[i]
        if (caracter.url === this.id) {
          LocalStorage.saveCaracter(caracter)
        }
      }
      caracterRow.remove()
    })
  }

  function createTableRow (caracter, position, type, pageLanguage) {
    var gender = translateGender(caracter.gender, pageLanguage)

    var eyeColor = translateEyeColor(caracter.eye_color)

    var actionButton = getActionButton(type, caracter.url)

    return (
      '<tr><th scope="row">' +
      position +
      '</th><td>' +
      caracter.name +
      '</td><td>' +
      gender +
      '</td><td>' +
      (caracter.height === 'unknown' ? '?' : caracter.height) +
      ' cm</td><td>' +
      (caracter.mass === 'unknown' ? '?' : caracter.mass) +
      ' kg</td><td>' +
      eyeColor +
      '</td><td>' +
      actionButton +
      '</td></tr>'
    )
  }

  function translateGender (gender, language) {
    var translateObjet = {
      male: {
        es: 'Hombre',
        en: 'Male'
      },
      female: {
        es: 'Mujer',
        en: 'Female'
      },
      hermaphrodite: {
        es: 'Hermafrodita',
        en: 'Hermaphrodite'
      },
      'n/a': {
        es: 'No aplica',
        en: 'Not apply'
      }
    }

    var translate =
      (translateObjet[gender] && translateObjet[gender][language]) || gender

    return translate
  }

  function translateEyeColor (eyeColor) {
    switch (eyeColor) {
      case 'blue':
        return 'Azul'
      case 'yellow':
        return 'Amarillo'
      case 'red':
        return 'Rojo'
      case 'brown':
        return 'Marrón'
      case 'blue-gray':
        return 'Azul grisáceo'
      case 'orange':
        return 'Naranja'
      case 'black':
        return 'Negro'
      case 'hazel':
        return 'Avellana'
      case 'pink':
        return 'Rosa'
      case 'gold':
        return 'Dorado'
      case 'red, blue':
        return 'Rojo, Azul'
      case 'unknown':
        return 'Desconocido'
      case 'green, yellow':
        return 'Verde, Amarillo'
      case 'white':
        return 'Blanco'
      case 'dark':
        return 'Oscuro'
      default:
        return eyeColor
    }
  }

  function getActionButton (type, url) {
    switch (type) {
      case 'add':
        return (
          '<button type="button" class="btn btn-success" id="' +
          url +
          '">Guardar</button>'
        )
      case 'delete':
        return (
          '<button type="button" class="btn btn-danger" id="' +
          url +
          '">Eliminar</button>'
        )
      default:
        return ''
    }
  }

  return exposed
})()
