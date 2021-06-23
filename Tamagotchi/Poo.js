export default class Poo {
  constructor() {
    this.y = random(450, 550);
    this.x = random(50, 700);
    this.visible = true;
  }
  display(picture) {
    push();

    if (this.visible === true) {
      image(picture, this.x - 50, this.y - 50, 100, 100);
    }
    pop();
  }
  hitTest() {
    push();
    if (
      mouseIsPressed &&
      mouseX >= this.x &&
      mouseX <= this.x + 100 &&
      mouseY >= this.y &&
      mouseY <= this.y + 100
    ) {
      return true;
    }
    pop();
  }
}
