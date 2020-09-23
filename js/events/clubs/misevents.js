const sword = $('.nav ul li span')

$(document).ready(() => {
  $('#fullpage').fullpage({
    scrollBar: true,

    anchors: [
      'club-miscellaneousevents',
      'Cluedo-desc',
      'Cluedo-info',
      'Cluedo-rules',
      'Cluedo-registration',
      'GameofChoices-desc',
      'GameofChoices-info',
      'GameofChoices-rules',
      'GameofChoices-registration',
      'HumanLudo-desc',
      'HumanLudo-info',
      'HumanLudo-rules',
      'HumanLudo-registration',
      'ChallengeAccepted-desc',
      'ChallengeAccepted-info',
      'ChallengeAccepted-rules',
      'ChallengeAccepted-registration',
      'PubgChampionship-desc',
      'PubgChampionship-info',
      'PubgChampionship-rules',
      'PubgChampionship-registration'
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
