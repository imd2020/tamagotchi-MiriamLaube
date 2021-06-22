export default class Buttons {
  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }
  display(picture) {
    push();

    imageMode(CENTER);
    image(picture, this.x, this.y, this.radius, this.radius);
    pop();
  }
  hitTest() {
    push();

    if (
      mouseIsPressed &&
      mouseX >= this.x - this.radius &&
      mouseX <= this.x + this.radius &&
      mouseY >= this.y - this.radius &&
      mouseY <= this.y + this.radius
    ) {
      return true;
    } else {
      return false;
    }
    pop();
  }
}
