$(".event-container").mousemove(e => {
  let x = e.offsetX / 1000;
  let y = e.offsetY / 1000;

  const frame = $(this).next();

  frame.css({
    transform: `rotate3d(-${y}, -${x}, 0, 10deg)`
  });
});