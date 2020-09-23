const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      'club-sophia',
      'tweet-desc',
      'tweet-info',
      'tweet-rules',
      'tweet-registration',
      'talkathon-desc',
      'talkathon-info',
      'talkathon-rules',
      'talkathon-registration',
      'debate-desc',
      'debate-info',
      'debate-rules',
      'debate-registration',
      'picturation-desc',
      'picturation-info',
      'picturation-rules',
      'picturation-registration'
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
