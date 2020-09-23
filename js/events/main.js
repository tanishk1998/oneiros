const item = $(".clubs-grid__item");

$(document).ready(function() {
  $("#fullpage").fullpage({
    anchors: ["main", "club-names","club-names2","club-names3" ],
    afterLoad: (i, path) => {
      if (path.index === 0) startVideo();
    }
  });

  item.hover(
    e => {
      e.currentTarget.children[0].children[0].style.opacity = 0;
      e.currentTarget.children[0].children[2].style.opacity = 0;
      e.currentTarget.children[0].children[1].style.opacity = 1;
    },
    e => {
      e.currentTarget.children[0].children[0].style.opacity = 1;
      e.currentTarget.children[0].children[2].style.opacity = 1;
      e.currentTarget.children[0].children[1].style.opacity = 0;
    }
  );
});

startVideo = () => {
  const video = document.getElementById("events-video");
  setTimeout(() => {
    video.play();
  }, 500);
};
