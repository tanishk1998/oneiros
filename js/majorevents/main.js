const menav = $(".me__nav");

// SPLASH PARALLAX
const all = document.getElementsByClassName("me__splash--single");
for (let i = 0; i < all.length; i++) {
  all[i].addEventListener("mousemove", e => {
    const splash = all[i].childNodes[3];
    const x = e.layerX;
    const y = e.clientY;

    splash.style.transform = `translate(-${x / 20}px, -${y / 20}px) scale(1.2)`;
  });

  all[i].addEventListener("mouseleave", e => {
    const splash = all[i].childNodes[1];
    splash.style.transform = `scale(1)`;
  });
}

// SPLASH CLICK ANIMATION
const splash = $(".me__splash--single");
const boxes = $(".me__shapes--box");
splash.click(e => {
  // MOVE SCREENS
  splash[0].classList.add("splash__screen--moveleft");
  splash[1].classList.add("splash__screen--moveright");

  const option = e.currentTarget.id;
  // RENDER SHAPES + SHOW NAV
  setTimeout(() => {
    $(".me__splash").css({
      pointerEvents: "none"
    });
    boxes.addClass("me__shapes--box__activate");
    setTimeout(() => {
      boxes.addClass("me__shapes--box__deactivate");
      boxes[2].classList.add("me__shapes--box__deactivate--center");
      setTimeout(() => {
        boxes.addClass("me__shapes--box__remove");
        menav.addClass("me__nav--show");
        $(`#${option}-nav`).addClass("option--show");
        const headers = $(`#${option}-nav h1`);
        setTimeout(() => {
          for (let i = 0; i < headers.length; i++)
            setTimeout(() => {
              $(`#${option}-nav h1:nth-child(${i + 1})`).addClass(
                "option--show__header"
              );
            }, i * 250);
        }, 200);
      }, 500);
    }, 1000);
  }, 700);
});

// NAV SELECTION CONTROLS
const controls = $(".me__nav--header");
const meevents = $(".me__all--item");
const eventcontrols = $(".me__controls--control");
const eventcontrolheader = $(".me__controls--control h1");

controls.click(e => {
  const option = e.currentTarget.id;
  meevents.removeClass("show--event");

  meevents.css({
    pointerEvents: "none"
  });
  $(`#${option}__details`).addClass("show--event");
  $(`#${option}__details`).css({
    pointerEvents: "all"
  });

  controls.removeClass("me__nav--header-active");
  $(`#${option}`).addClass("me__nav--header-active");
  if (!menav.hasClass("nav--bottomfix")) {
    menav.addClass("nav--bottomfix");
    setTimeout(() => {
      $(".me__all--item__trigger").addClass("me__all--item__trigger--show");
    }, 1000);
  }

  if (option.split("-")[0] == "event") {
    eventcontrols.addClass("controls--expand-left");
    eventcontrolheader.text("Artists");
  } else {
    eventcontrols.addClass("controls--expand-right");
    eventcontrolheader.text("Events");
  }
});

// EVENT CONTROLS
const meoverlay = $(".me__overlay");
eventcontrols.click(e => {
  const option = e.currentTarget.innerText.toLowerCase().trim();
  eventcontrols.css({
    pointerEvents: "none"
  });
  if (option === "artists")
    handleControls(
      "controls--expand-right",
      "controls--expand-left",
      "events",
      "artist"
    );
  else
    handleControls(
      "controls--expand-left",
      "controls--expand-right",
      "artists",
      "event"
    );
});

const handleControls = (to, from, text, option) => {
  eventcontrolheader.css({
    opacity: 0
  });
  meoverlay.fadeIn();
  eventcontrols.addClass("controls--expand");

  setTimeout(() => {
    eventcontrols.addClass(to);
    eventcontrols.removeClass(from);
    eventcontrols.removeClass("controls--expand");
    meoverlay.fadeOut();

    $(`.me__nav--single`).removeClass("option--show");
    $(`#${option}-nav`).addClass("option--show");
    $(`#${option}-nav h1`).addClass("option--show__header");
    meevents.removeClass("show--event");
    meevents.css({
      pointerEvents: "none"
    });

    $(
      `${
        option === "artist"
          ? ".me__all--item:nth-child(1)"
          : ".me__all--item:nth-child(4)"
      }`
    ).addClass("show--event");
    $(
      `${
        option === "artist"
          ? ".me__all--item:nth-child(1)"
          : ".me__all--item:nth-child(4)"
      }`
    ).css({
      pointerEvents: "all"
    });
    controls.removeClass("me__nav--header-active");
    $(`${option === "artist" ? "#artist-1" : "#event-1"}`).addClass(
      "me__nav--header-active"
    );

    setTimeout(() => {
      eventcontrols.css({
        pointerEvents: "all"
      });
      eventcontrolheader.text(text);
      eventcontrolheader.css({
        opacity: 1
      });
    }, 500);
  }, 1000);
};

const tlt = $(".tlt-images");

let flag = 1;
setInterval(() => {
  if (flag === 14) flag = 1;
  tlt.css({
    "background-image": `url('/img/majorevents/tlt/${flag}.jpg')`
  });
  ++flag;
}, 3000);
