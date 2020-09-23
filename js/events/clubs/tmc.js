const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      'club-tmc',
      'octaves-desc',
      'octaves-info',
      'octaves-rules',
      'octaves-registration',
      'dhwani-desc',
      'dhwani-info',
      'dhwani-rules',
      'dhwani-registration',
      'saptak-desc',
      'saptak-info',
      'saptak-rules',
      'saptak-registration',
      'twicethevoice-desc',
      'twicethevoice-info',
      'twicethevoice-rules',
      'twicethevoice-registration',
      'ensemble-desc',
      'ensemble-info',
      'ensemble-rules',
      'ensemble-registration',
      'beatstreet-desc',
      'beatstreet-info',
      'beatstreet-rules',
      'beatstreet-rules',
      'beatstreet-registration',
      'songsmith-desc',
      'songsmith-info',
      'songsmith-rules',
      'songsmith-registration',
      'woodstock-desc',
      'woodstock-info',
      'woodstock-rules',
      'woodstock-registration'
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
