$(document).ready(() => {
  // generate()

  const triangles = $('.triangles')
  for (let i = 0; i < triangles.length; i++) {
    triangles[i].style.left = `${randomizeX()}px`
    triangles[i].style.top = `${randomizeY()}px`
    triangles[i].children[0].style.clipPath = `polygon(${randomize()}% ${randomize()}%, ${randomize()}% ${randomize()}%, ${randomize()}% ${randomize()}%)`
  }

  $('.home-contact').on('mousemove', e => {
    const x = e.offsetX
    const y = e.offsetY

    if (e.target.classList.value.indexOf('noeffect') >= 0) return

    triangles.css({
      transform: `translate(-${x / (window.innerWidth / 50)}px, -${y / 20}px)`,
    })
  })
})

const randomizeX = () => {
  return window.innerWidth * Math.random()
}

const randomizeY = () => {
  return window.innerHeight * Math.random()
}

const randomize = () => {
  return Math.random() * 100
}

const generate = () => {
  const triangles = `
    <div class="triangles">
      <div class="triangle"></div>
    </div>
  `
  for (let i = 0; i < 15; i++) $('.home-contact .fp-tableCell').prepend(triangles)
}