$(document).ready(function () {
  const eventsListBtn = $('.events-list')
  const selectedEvent = $('.events-list__item--selected')
  const eventsList = $('.events-list > ul')
  const eventsListItem = $('.events-list > ul li')
  const eventsListItemAnchor = $('.events-list > ul li > a')
  const bg = $('.event-reg__next').css('background-color')

  $('body').click(function(e) {
    eventsList.removeClass('showlist')
  })

  eventsListBtn.css('background', bg)
  eventsListBtn.css('box-shadow', `0 0.13rem 2rem ${bg}`)
  eventsListItemAnchor.css('color', bg)
  eventsListItemAnchor.mouseenter(function () {
    $(this).css('color', 'white')
    $(this).css('background', bg)
  })
  eventsListItemAnchor.mouseleave(function () {
    $(this).css('color', bg)
    $(this).css('background', 'white')
  })
  eventsListBtn.on('click', e => {
    e.stopPropagation()
    eventsList.toggleClass('showlist')
  })
  eventsListItem.on('click', function () {
    const text = $(this)
      .children('a')
      .text()
    selectedEvent.text(text)
  })
})