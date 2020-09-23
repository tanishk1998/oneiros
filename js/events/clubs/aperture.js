const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      'club-aperture',
      'focus-desc',
      'focus-info',
      'focus-rules',
      'focus-registration',
      'shutterup-desc',
      'shutterup-info',
      'shutterup-rules',
      'shutterup-registration',
      'instaperture-desc',
      'instaperture-info',
      'instaperture-rules',
      'instaperture-registration',
      'showdownofsocieties-desc',
      'showdownofsocieties-info',
      'showdownofsocieties-rules',
      'showdownofsocieties-registration',
      'pictureperfect-desc',
      'pictureperfect-info',
      'pictureperfect-rules',
      'pictureperfect-registration',
      'powershoot-desc',
      'powershoot-info',
      'powershoot-rules',
      'powershoot-registration'
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