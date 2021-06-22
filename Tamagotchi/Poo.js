export default class Poo {
  constructor(x, y, visible) {
    this.y = y;
    this.x = x;
    this.visible = visible;
  }
  display(time, picture) {
    push();

    if (time === 0) {
      this.visible = true;
    }
    if (time <= 100 && this.visible === true) {
      image(picture, this.x - 50, this.y - 50, 100, 100);
      if (time >= 100) {
        this.visible = false;
      }
      pop();
    }
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
