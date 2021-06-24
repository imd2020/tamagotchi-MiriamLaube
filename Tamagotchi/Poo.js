export default class Poo {
  constructor(resize) {
    this.resize = resize;
    this.y = random(1035, 1265);
    this.x = random(115, 1150);
    this.visible = true;
  }
  display(picture) {
    push();

    if (this.visible === true) {
      image(
        picture,
        this.x - 50 * this.resize,
        this.y - 50 * this.resize,
        100 * this.resize,
        100 * this.resize
      );
    }
    pop();
  }
  hitTest() {
    push();
    if (
      mouseIsPressed &&
      mouseX >= this.x &&
      mouseX <= this.x + 100 * this.resize &&
      mouseY >= this.y &&
      mouseY <= this.y + 100 * this.resize
    ) {
      return true;
    }
    pop();
  }
}
