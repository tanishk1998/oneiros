var canvas = document.querySelector("#about-canvas");
var c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// VARIABLES
var colors1 = ["#0C2C4E", "#2B455D", "#6B7E8E", "#AFB9C1", "#6AF2EE"];
var colors2 = ["#F2CB05", "#F2B705", "#F29F05", "#F27405", "#BF3604"];
// -- VARIABLES

// EVENT LISTENERS
addEventListener("resize", function() {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});
// -- EVENT LISTENERS

// FUNCTIONS
function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}
// OBJECTS
function Stars(x, y, radius, dy, dx, color) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dy = dy;
  this.dx = dx;
  this.color = color;

  this.draw = function() {
    c.save();
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    c.shadowColor = this.color;
    c.shadowBlur = 20;
    c.shadowOffsetX = 0;
    c.shadowOffsetY = 0;
    c.fillStyle = this.color;
    c.fill();
    c.closePath();
    c.restore();
  };

  this.update = function() {
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = randomIntFromRange(this.radius, canvas.width);
    }
    if (this.x > canvas.width) {
      this.x = 0;
      this.y = randomIntFromRange(this.radius, canvas.width);
    }
    this.y -= this.dy;
    this.x += this.dx;

    this.draw();
  };
}

// IMPLEMENTATION
let stars = [];

function init() {
  stars = [];
  for (var i = 0; i < 50; i++) {
    var stars_radius = randomIntFromRange(2, 3);
    var stars_x = randomIntFromRange(stars_radius, canvas.width);
    var stars_y = randomIntFromRange(stars_radius, canvas.height);
    var stars_dy = Math.random() / 5;
    var stars_dx = Math.random() / 5;
    var stars_color = randomColor(colors2);

    stars.push(
      new Stars(stars_x, stars_y, stars_radius, stars_dy, stars_dx, stars_color)
    );
  }
}

var background = new Image();
background.src = "/img/home/about.jpg";

function animate() {
  requestAnimationFrame(animate);
  // c.fillStyle = 'rgba(0, 0, 0, 0.12)'
  c.fillRect(0, 0, canvas.width, canvas.height);
  c.drawImage(background, 0, 0);

  for (var i = 0; i < stars.length; i++) stars[i].update();
}

init();
animate();
// -- IMPLEMENTATION
