const sword = $(".nav ul li span");

$(document).ready(() => {
  $("#fullpage").fullpage({
    scrollBar: true,

    anchors: [
      "club-litmus",
      "bamboozled-desc",
      "bamboozled-info",
      "bamboozled-rules",
      "bamboozled-rules",
      "bamboozled-registration",
      "ekphrasis-desc",
      "ekphrasis-info",
      "ekphrasis-rules",
      "ekphrasis-rules",
      "ekphrasis-registration",
      "jam-desc",
      "jam-info",
      "jam-rules",
      "jam-rules",
      "jam-registration",
      "parliamentarydebate-desc",
      "parliamentarydebate-info",
      "parliamentarydebate-rules",
      "parliamentarydebate-registration",
      "pictionary-desc",
      "pictionary-info",
      "pictionary-rules",
      "pictionary-rules",
      "pictionary-registration",
      "songsmith-desc",
      "songsmith-info",
      "songsmith-rules",
      "songsmith-registration",
      "poparazzi-desc",
      "poparazzi-info",
      "poparazzi-rules",
      "poparazzi-registration",
      "voiceover-desc",
      "voiceover-info",
      "voiceover-rules",
      "voiceover-registration"
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
