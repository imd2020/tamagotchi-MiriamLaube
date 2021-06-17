import Poo from "./Poo.js";
let poopPic = loadImage("pooPicture.png");
let time = [0];
let visible = true;
let x = [];
let y = [];
function draw() {
  clear();
  if (x.length <= 1) {
    x.push(random(50, 700));
    y.push(random(400, 550));
  }
  time[0] = time[0] + 1;
  if (mouseIsPressed && time[0] >= 100) {
    time[0] = 0;
  }
  let poop = new Poo(x[0], y[0], visible);
  poop.display(time[0], poopPic);
  if (time > 100) {
    y.splice(0, 1, random(400, 550));
    x.splice(0, 1, random(50, 700));
  }
}
