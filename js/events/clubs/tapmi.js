const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-tapmi",
      "sharktank-desc",
      "sharktank-info",
      "sharktank-rules",
      "sharktank-rules",
      "sharktank-registration",
      "situationcrisisanalysis-desc",
      "situationcrisisanalysis-info",
      "situationcrisisanalysis-rules",
      "situationcrisisanalysis-registration",
      "stocksimulation-desc",
      "stocksimulation-info",
      "stocksimulation-rules",
      "stocksimulation-registration",
      "turncoat-desc",
      "turncoat-info",
      "turncoat-rules",
      "turncoat-registration",
      "beergame-desc",
      "beergame-info",
      "beergame-rules",
      "beergame-registration"
    ],
    afterLoad: (origin, dest) => {
      let option = 0;
      const selectedEvent = $(".events-list__item--selected");
      const eventName = dest.anchor.split("-")[0].toUpperCase();
      if (eventName !== "CLUB") {
        selectedEvent.text(eventName);
      } else {
        selectedEvent.text("Select Event");
      }
      option = dest.anchor.split("-")[0] !== "club" ? 1 : 0;
      $("#wordmark").css({
        filter: `invert(${option})`
      });
      if (dest.anchor.split("-")[0] !== "club") sword.addClass("nav-darken");
      else sword.removeClass("nav-darken");
    }
  });
});
