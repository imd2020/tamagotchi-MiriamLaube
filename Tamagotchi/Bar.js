export default class Bar {
  constructor(x, y, minNumber, maxNumber) {
    this.x = x;
    this.y = y;
    this.minNumber = minNumber;
    this.maxNumber = maxNumber;
  }
  display(yLine) {
    push();
    fill(255);
    strokeWeight(3);
    rect(this.x, this.y, 100, 270);
    fill(153, 153, 0);
    rect(this.x, this.y + 115, 100, 40);
    strokeWeight(7);
    line(this.x, yLine, this.x + 100, yLine);
    pop();
  }
  hitTest(yLine) {
    push();
    if (mouseIsPressed && yLine >= this.y + 115 && yLine <= this.y + 155) {
      return true;
    }
    pop();
  }
}
