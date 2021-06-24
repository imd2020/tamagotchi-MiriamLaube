angleMode(DEGREES);
export default class Ball {
  constructor(
    x,
    y,
    radius,
    destinationRight,
    desinationLeft,
    stateLeft,
    rotation,
    resize
  ) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.radius = radius * this.resize;
    this.destinationRight = destinationRight * this.resize;
    this.desinationLeft = desinationLeft * this.resize;
    this.stateLeft = stateLeft;
    this.rotation = rotation;
  }
  display(picture) {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.rotation);
    image(picture, 0, 0, this.radius, this.radius);
    pop();
  }

  display(picture) {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.rotation);
    image(picture, 0, 0, this.radius, this.radius);
    pop();
  }

  left() {
    if (this.x >= this.desinationLeft && this.stateLeft === true) {
      this.x = this.x - 5 * this.resize;
      this.rotation = this.rotation - 10;
      if (this.x === this.desinationLeft) {
        this.stateLeft = false;
      }
    }
  }
  right() {
    if (this.x <= this.destinationRight && this.stateLeft === false) {
      this.x = this.x + 5 * this.resize;
      this.rotation = this.rotation + 10;
      if (this.x === this.destinationRight) {
        this.stateLeft = true;
      }
    }
  }
  hitTest() {
    if (mouseIsPressed) {
      this.left();
      this.right();
    }
  }
}
