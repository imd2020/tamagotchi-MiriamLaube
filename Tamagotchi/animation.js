import gsap from "./gsap.min.js";
let moon = loadImage("moon.png");
const moonX = {
  x: 100,
  y: 100,
};

function draw() {
  background(0, 0, 0);

  image(moon, moonX.x, 100, 100, 100);
}

gsap.to(moonX, {
  duration: 2,
  ease: "linear",
  x: 400,
});
