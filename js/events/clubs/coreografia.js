const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      'club-coreografia',
      'nextar-desc',
      'nextar-info',
      'nextar-rules',
      'nextar-rules',
      'nextar-registration',
      'showcase-desc',
      'showcase-info',
      'showcase-rules',
      'showcase-registration',
      'groundzero-desc',
      'groundzero-info',
      'groundzero-rules',
      'groundzero-registration',
      'stepsvsbeats-desc',
      'stepsvsbeats-info',
      'stepsvsbeats-rules',
      'stepsvsbeats-registration'
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
