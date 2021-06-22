export default class Water {
  constructor(x, y, waterHeight, destinationTop, destinationBottom, stateRise) {
    this.x = x;
    this.y = y;
    this.waterHeight = waterHeight;
    this.destinationTop = destinationTop;
    this.destinationBottom = destinationBottom;
    this.stateRise = stateRise;
  }
  display() {
    push();
    fill(51, 153, 255);
    rect(this.x, this.y, 190, this.waterHeight);
    ellipse(this.x + 95, this.y, 190, 30);
    ellipse(this.x + 95, 400, 190, 30);
    pop();
  }
  rise() {
    if (this.y >= this.destinationTop && this.stateRise === true) {
      this.y = this.y - 5;
      this.waterHeight = this.waterHeight + 5;
      if (this.y === this.destinationTop) {
        console.log("ich mach was rise");
        this.stateRise = false;
      }
    }
  }
  fall() {
    if (this.y <= this.destinationBottom && this.stateRise === false) {
      this.y = this.y + 5;
      this.waterHeight = this.waterHeight - 5;
      if (this.y === this.destinationBottom) {
        console.log("ich mach was fall");
        this.stateRise = true;
      }
    }
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x - 10 &&
      mouseX <= this.x + 200 &&
      mouseY >= this.destinationTop - 60 &&
      mouseY <= this.destinationBottom + 50
    ) {
      this.rise();
      this.fall();
    }
  }
}
