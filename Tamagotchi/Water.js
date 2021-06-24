export default class Water {
  constructor(
    x,
    y,
    waterHeight,
    destinationTop,
    destinationBottom,
    stateRise,
    resize
  ) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.waterHeight = waterHeight * this.resize;
    this.destinationTop = destinationTop * this.resize;
    this.destinationBottom = destinationBottom * this.resize;
    this.stateRise = stateRise;
  }
  display() {
    push();
    fill(51, 153, 255);
    noStroke();
    rect(this.x, this.y, 190 * this.resize, this.waterHeight);
    ellipse(
      this.x + 95 * this.resize,
      this.y,
      190 * this.resize,
      30 * this.resize
    );
    ellipse(
      this.x + 95 * this.resize,
      400 * this.resize,
      190 * this.resize,
      30 * this.resize
    );
    pop();
  }
  rise() {
    if (this.y >= this.destinationTop && this.stateRise === true) {
      this.y = this.y - 5 * this.resize;
      this.waterHeight = this.waterHeight + 5 * this.resize;
      if (this.y === this.destinationTop) {
        console.log("ich mach was rise");
        this.stateRise = false;
      }
    }
  }
  fall() {
    if (this.y <= this.destinationBottom && this.stateRise === false) {
      this.y = this.y + 5 * this.resize;
      this.waterHeight = this.waterHeight - 5 * this.resize;
      if (this.y === this.destinationBottom) {
        console.log("ich mach was fall");
        this.stateRise = true;
      }
    }
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x - 10 * this.resize &&
      mouseX <= this.x + 200 * this.resize &&
      mouseY >= this.destinationTop - 60 * this.resize &&
      mouseY <= this.destinationBottom + 50 * this.resize
    ) {
      this.rise();
      this.fall();
    }
  }
}
