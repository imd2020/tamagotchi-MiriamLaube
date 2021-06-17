angleMode(DEGREES);
import Poo from "./Poo.js";
import Parameter from "./Parameter.js";
let x = [];
let y = [];
let arrayPoo = new Poo();
let poop = new Parameter(135 + 150 * 2, 750, 100);
let poopPic = loadImage("pooPicture.png");
function draw() {
  clear();
  function createPoo() {
    x = random(50, 700);
    y = random(450, 550);
    arrayPoo.push(x, y);
  }
  if (poop.parameter === 80) {
    if (arrayPoo.length < 1) {
      createPoo();
    }
  }
  arrayPoo.display(poopPic);
}
