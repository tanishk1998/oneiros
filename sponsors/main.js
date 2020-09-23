function scrollDown() {
  var vheight = $(window).height();
  $("html, body").animate(
    {
      scrollTop: (Math.floor($(window).scrollTop() / vheight) + 1) * vheight
    },
    500
  );
}
$(document).ready(function() {
  jQuery(function($) {
    var $nav = $("#wordmark");
    var $win = $(window);
    var winH = $win.height(); // Get the window height.

    $win
      .on("scroll", function() {
        if ($(this).scrollTop() > winH - 100) {
          $nav.addClass("wordmark-dark");
        } else {
          $nav.removeClass("wordmark-dark");
        }
      })
      .on("resize", function() {
        // If the user resizes the window
        winH = $(this).height(); // you'll need the new height value
      });
  });
  if ($("image-sponsor").attr("loc") != "") {
    $(this).css("cursor", "pointer");
  }
  $("#sponsors-anchor").click(function() {
    scrollDown();
    event.preventDefault();
  });
  $(".image-sponsor").click(function() {
    if ($(this).attr("loc") != "") window.open($(this).attr("loc"), "_open");
  });
});
