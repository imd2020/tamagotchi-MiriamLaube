export default class Parameter {
  constructor(x, resize) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = 750 * this.resize;
    this.parameter = 100;
  }
  display() {
    push();
    textSize(20 * this.resize);
    text(this.parameter, this.x, this.y);
    pop();
  }
}
