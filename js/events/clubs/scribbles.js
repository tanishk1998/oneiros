const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: ['club-scribbles',
    'fusionoid-desc',
    'fusionoid-info',
    'fusionoid-rules',
    'fusionoid-registration',
    'comicstaan-desc',
    'comicstaan-info',
    'comicstaan-rules',
    'comicstaan-registration',
    'trippy-desc',
    'trippy-info',
    'trippy-rules',
    'trippy-registration',
    'junk-desc',
    'junk-info',
    'junk-rules',
    'junk-registration'
    ],
    afterLoad: (origin, dest) => {
      let option = 0
      const selectedEvent = $('.events-list__item--selected')
      const eventName = dest.anchor.split('-')[0].toUpperCase()
      if (eventName !== 'CLUB') {
        selectedEvent.text(eventName)
      } else {
        selectedEvent.text('Select Event')
      }
      option = dest.anchor.split('-')[0] !== 'club' ? 1 : 0
      $('#wordmark').css({
        filter: `invert(${option})`
      })
      if (dest.anchor.split('-')[0] !== 'club') sword.addClass('nav-darken')
      else sword.removeClass('nav-darken')
    }
  })
})
