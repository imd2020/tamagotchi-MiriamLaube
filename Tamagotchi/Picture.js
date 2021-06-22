export default class Picture {
  constructor(x, y, waterHeight, waterwidth) {
    this.x = x;
    this.y = y;
    this.waterHeight = waterHeight;
    this.with = waterwidth;
  }
  happy(picture) {
    push();

    image(
      picture,
      (this.x = this.x - 250),
      (this.y = this.y - 250),
      (this.waterwidth = 520),
      (this.waterHeight = 400)
    );
    pop();
  }
}
