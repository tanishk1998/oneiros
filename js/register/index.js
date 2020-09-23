const section = $('.register-container__white-section, .register-container__black-section')
const white = $('.register-container__white-section')
const black = $('.register-container__black-section')
const header_white = $('.register-container__white-section--overlay h1')
const header_black = $('.register-container__black-section--overlay h1')
const form_white = $('.register-container__white-section--underlay')
const form_black = $('.register-container__black-section--underlay')

const swords = $('.nav__sword, .nav__handle')

if (window.innerWidth < 800) {
  swords.addClass('nav-darken')
}

$(document).ready(() => {
  section.click(e => {
    if (e.target.localName !== 'div') return
    blockContact(true)
    if (e.target.classList.value.indexOf('compress') > 0) {
      if (white.hasClass('section--expand')) {
        other_clicks(white, black, header_white, header_black, form_white, form_black)
        return
      } else if (black.hasClass('section--expand')) {
        other_clicks(black, white, header_black, header_white, form_black, form_white)
        return
      }
    }

    if (e.target.classList.value.indexOf('white') > 0) {
      first_click(white, black, header_black, header_white, form_white)
    } else {
      first_click(black, white, header_white, header_black, form_black)
    }
  })
})

const first_click = (expand, compress, header, fade, form) => {
  expand.addClass('section--expand')
  compress.addClass('section--compress')

  fade.addClass('fadeOut')
  setTimeout(() => {
    form.fadeIn()
    blockContact(false)
  }, 1000);

  if (window.innerWidth > 800) header.addClass('header--rotate')
}

const other_clicks = (compress, expand, rotate, unrotate, formHide, formShow) => {
  compress.addClass('section--compress')
  compress.removeClass('section--expand')
  expand.addClass('section--expand')
  expand.removeClass('section--compress')

  unrotate.addClass('fadeOut')
  rotate.removeClass('fadeOut')

  if (window.innerWidth > 800) {
    rotate.addClass('header--rotate')
    unrotate.removeClass('header--rotate')
  }

  setTimeout(() => {
    formShow.fadeIn()
    blockContact(false)
  }, 1000);
  formHide.css({
    display: 'none'
  })
}

const blockContact = (bool) => {
  if (bool) {
    $('.register-container').css({
      pointerEvents: 'none'
    })
  } else {
    $('.register-container').css({
      pointerEvents: 'all'
    })
  }
}

$(document).ready(() => {
  if (window.innerWidth < 800) {
    $('.nav__sword').addClass('nav-darken')
    $('.nav__handle').addClass('nav-darken')
  }
})