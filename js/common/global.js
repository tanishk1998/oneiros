const nav = $(".nav");
const sword1 = $(".nav ul li:nth-child(1)");
const sword2 = $(".nav ul li:nth-child(2)");
const sword3 = $(".nav ul li:nth-child(3)");

const blackoverlay = $(".nav-container__blackoverlay");
const redoverlay = $(".nav-container__redoverlay");
const whiteoverlay = $(".nav-container__whiteoverlay");
const whiteotheroverlay = $(".nav-container__whiteotheroverlay");

const links = $(".nav-container__whiteoverlay a");
// $("body").click(() => {
//   nav.removeClass("nav-active");
//   sword1.removeClass("sword1-activate");
//   sword2.removeClass("sword2-activate");
//   sword3.removeClass("sword3-activate");
//   $("#black-overlay").removeClass("body-darken");
//   showNavPage(false);
// });
nav.click(e => {
  e.stopPropagation();
  if (!nav.hasClass("nav-active")) {
    nav.addClass("nav-active");
    sword1.addClass("sword1-activate");
    sword2.addClass("sword2-activate");
    sword3.addClass("sword3-activate");
    $("#black-overlay").addClass("body-darken");
    // showNavPage(true);
    showNewNav(true);
  } else {
    nav.removeClass("nav-active");
    sword1.removeClass("sword1-activate");
    sword2.removeClass("sword2-activate");
    sword3.removeClass("sword3-activate");
    setTimeout(() => {
      $("#black-overlay").removeClass("body-darken");
    }, 1000);
    // showNavPage(false);
    showNewNav(false);
  }
});

const newLinks = $(".newnav-container li");
const navSplash = $(".newnav-container__splash");
const showNewNav = bool => {
  if (bool) {
    nav.css({
      pointerEvents: "none"
    });
    $(".nav-container").removeClass("nav--shrink");
    $(".nav-container").removeClass("nav--close");
    $(".nav-container").addClass("nav--expand");
    setTimeout(() => {
      $(".nav-container").addClass("nav--full");
      navSplash.fadeIn();
      for (let i = 0; i < newLinks.length; i++)
        setTimeout(() => {
          newLinks[i].classList.add("show-nav-links");
        }, i * 100);
      setTimeout(() => {
        nav.css({
          pointerEvents: "all"
        });
      }, 1000);
    }, 500);
  } else {
    nav.css({
      pointerEvents: "none"
    });
    navSplash.fadeOut();
    newLinks.removeClass("show-nav-links");
    setTimeout(() => {
      $(".nav-container").addClass("nav--shrink");
      setTimeout(() => {
        $(".nav-container").removeClass("nav--expand");
        $(".nav-container").removeClass("nav--full");
        $(".nav-container").addClass("nav--close");
        nav.css({
          pointerEvents: "all"
        });
      }, 500);
    }, 500);
  }
};

const showNavPage = bool => {
  if (bool) {
    $(".nav-container").css({
      pointerEvents: "all"
    });
    whiteoverlay.addClass("activate-whiteoverlay");
    setTimeout(() => {
      blackoverlay.addClass("activate-blackoverlay");
    }, 100);
    setTimeout(() => {
      redoverlay.addClass("activate-redoverlay");
    }, 200);
    for (let i = 0; i < links.length; i++)
      setTimeout(() => {
        links[i].classList.add("show-nav-links");
      }, i * 100);
  } else {
    $(".nav-container").css({
      pointerEvents: "none"
    });
    links.removeClass("show-nav-links");
    whiteoverlay.removeClass("activate-whiteoverlay");
    setTimeout(() => {
      blackoverlay.removeClass("activate-blackoverlay");
    }, 100);
    setTimeout(() => {
      redoverlay.removeClass("activate-redoverlay");
    }, 200);
  }
};

$(document).ready(() => {
  setTimeout(() => {
    $(".loader-prime").addClass("hide-prime-loader");
  }, 2000);
  $(".mext-logo").click(function () {
    window.open("https://mext.in", "_blank");
  });
  $(".moodi-logo").click(function () {
    window.open("https://moodi.org", "_blank");
  });
  $(".wordmark, #wordmark").click(function () {
    window.open("https://oneiros.co.in", "_self");
  });
  $("#mext").click(function () {
    window.open("https://mext.in", "_blank");
  });
});

$(".custom-link").click(e => {
  e.preventDefault();
  const link = e.target.href;

  $(".loader-prime").removeClass("hide-prime-loader");
  setTimeout(() => {
    window.location.replace(link);
  }, 2000);
});

const login = $("#loginButton");
const register = $("#registerButton");
const events = $("#eventsButton");
const logout = $("#logout");
firebase.auth().onAuthStateChanged(user => {
  if (user) {
    login.css({
      display: "none"
    });
    register.css({
      display: "none"
    });
    events.css({
      display: "all"
    });
    logout.css({
      display: "all"
    });
  } else {
    login.css({
      display: "all"
    });
    register.css({
      display: "all"
    });
    events.css({
      display: "none"
    });
    logout.css({
      display: "none"
    });
  }
});

logout.click(() => {
  firebase.auth().signOut();
});

$(document).ready(() => {
  const moodi = `<img src="/img/logos/moodi-logo.png" style="cursor:pointer" id="moodi-nav-logo" alt="">`;
  $(".newnav-container__splash--box").append(moodi);
  $("#moodi-nav-logo").click(function () {
    window.open("https://moodi.org", "_blank");
  });
});

console.log(
  `%c
M         M E E E E E X        X  T T T T T
MM      M M E          X      X       T
M M    M  M E            X   X        T
M  M  M   M E E E E E      X          T
M    M    M E            X    X       T
M         M E E E E E  X        X     T`,
  "font-family:monospace; color: blue"
);
console.log(
  `%c
    O     N     N   E E E E   I   R R R      O     S S S    
  O   O   N N   N   E         I   R    R   O   O   S 
  O   O   N  N  N   E E E E   I   R R R    O   O   S S S
  O   O   N   N N   E         I   R   R    O   O       S
    O     N     N   E E E E   I   R    R     O     S S S
  `,
  "font-family:monospace; color: red"
);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
}