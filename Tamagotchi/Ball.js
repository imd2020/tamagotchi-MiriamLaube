angleMode(DEGREES);
export default class Ball {
  constructor(
    x,
    y,
    radius,
    destinationRight,
    desinationLeft,
    stateLeft,
    rotation
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.destinationRight = destinationRight;
    this.desinationLeft = desinationLeft;
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

  left() {
    if (this.x >= this.desinationLeft && this.stateLeft === true) {
      this.x = this.x - 5;
      this.rotation = this.rotation - 10;
      if (this.x === this.desinationLeft) {
        this.stateLeft = false;
      }
    }
  }
  right() {
    if (this.x <= this.destinationRight && this.stateLeft === false) {
      this.x = this.x + 5;
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
