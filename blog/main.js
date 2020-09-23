const logo = $("#header__logo");
var originalXVal = parseInt(logo.css("transform").split(",")[4]);
window.addEventListener("scroll", function(e) {
  const offsetTop = window.scrollY;
  logo.css({
    transform: `translateX(${originalXVal + offsetTop}px) translateY(20%)`
  });
});
