export default class Buttons {
  constructor(x, y, radius, resize) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.radius = radius * this.resize;
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
