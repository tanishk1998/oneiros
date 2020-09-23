const splash = $(".home-theme__splash");

$(".home-theme").mousemove(e => {
  const x = -e.offsetX;
  const y = -e.offsetY;

  splash.css({
    transform: "scale(1.2)",
    left: `${x / 50}px`,
    top: `${y / 50}px`
  });
});