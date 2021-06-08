export default class Picture {
  constructor(x, y, height, width) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.with = width;
  }
  happy(picture) {
    push();
    image(
      picture,
      (this.x = this.x - 250),
      (this.y = this.y - 250),
      (this.width = 520),
      (this.height = 400)
    );
    pop();
  }
}
