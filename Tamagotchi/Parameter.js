export default class Parameter {
  constructor(x, y, parameter) {
    this.x = x;
    this.y = y;
    this.parameter = parameter;
  }
  display() {
    push();
    text(this.parameter, this.x, this.y);
    pop();
  }
}
