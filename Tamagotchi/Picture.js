export default class Picture {
  constructor(x, y, waterHeight, waterwidth, resize) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.waterHeight = waterHeight * this.resize;
    this.with = waterwidth * this.resize;
  }
  happy(picture) {
    push();

    image(
      picture,
      (this.x = this.x - 250 * this.resize),
      (this.y = this.y - 250 * this.resize),
      (this.waterwidth = 520 * this.resize),
      (this.waterHeight = 400 * this.resize)
    );
    pop();
  }
}
