export default class Bar {
  constructor(x, y, minNumber, maxNumber, resize) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.minNumber = minNumber * this.resize;
    this.maxNumber = maxNumber * this.resize;
  }
  display(yLine) {
    push();

    fill(255);
    strokeWeight(3 * this.resize);
    rect(this.x, this.y, 100 * this.resize, 270 * this.resize);
    fill(153, 153, 0);
    rect(
      this.x,
      this.y + 115 * this.resize,
      100 * this.resize,
      40 * this.resize
    );
    strokeWeight(7 * this.resize);
    line(this.x, yLine, this.x + 100 * this.resize, yLine);
    pop();
  }
  hitTest(yLine) {
    push();

    if (
      mouseIsPressed &&
      yLine >= this.y + 115 * this.resize &&
      yLine <= this.y + 155 * this.resize
    ) {
      return true;
    }
    pop();
  }
}
