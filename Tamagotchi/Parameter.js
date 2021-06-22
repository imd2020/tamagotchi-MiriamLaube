export default class Parameter {
  constructor(x) {
    this.x = x;
    this.y = 750;
    this.parameter = 100;
  }
  display() {
    push();

    text(this.parameter, this.x, this.y);
    pop();
  }
}
