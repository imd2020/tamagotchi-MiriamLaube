export default class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  display(picture) {
    push();
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 150 &&
      mouseY >= this.y &&
      mouseY <= this.y + 150
    ) {
      rotate(100);
      image(picture, mouseX, mouseY, 0, 0);
    }
    pop();
  }
  hitTest() {
    return true;
  }
}
