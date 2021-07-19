function setup() {
  createCanvas(4000, 3200);
  frameRate(30);
}
window.addEventListener("resize", function () {
  resizeCanvas(windowWidth, windowHeight);
  clear();
});

new p5();
var width = windowWidth;
var height = windowHeight;
window.setup = setup;
