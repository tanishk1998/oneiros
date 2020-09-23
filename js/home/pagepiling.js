const container = $('.home.about')
const button = $('.ono-animatedbtn')
const theme = $('.home-theme__content')

$(document).ready(() => {
  $('#fullpage').fullpage({
    easing: 'easeInOut',
    easingcss3: 'easeInOut',
    anchors: ['home', 'about', 'theme', 'contact'],
    onLeave: () => {
      button.removeClass('ono-animation')
    },
    afterLoad: (origin, dest) => {
      container.removeClass('home-about-showcontent')
      theme.removeClass('home-theme-showcontent')

      handleButton()
      if (dest.index === 1) handleAboutPage()
      else if (dest.index === 2) handleThemePage()
    }
  })
})

handleAboutPage = () => {
  setTimeout(() => {
    container.addClass('home-about-showcontent')
  }, 100)
}

handleButton = () => {
  setTimeout(() => {
    button.addClass('ono-animation')
  }, 300)
}

handleThemePage = () => {
  setTimeout(() => {
    theme.addClass('home-theme-showcontent')
  }, 100)
}