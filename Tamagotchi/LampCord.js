export default class LampCord {
  constructor(x, y, radius, yMin, yMax, day, xDistance, yDistance, resize) {
    this.resize = resize;
    this.xDistance = xDistance * this.resize;
    this.yDistance = yDistance * this.resize;
    this.x = x * this.resize - xDistance * this.resize;
    this.y = y * this.resize - yDistance * this.resize;
    this.radius = radius * this.resize;
    this.yMin = yMin * this.resize;
    this.yMax = yMax * this.resize;
    this.day = day;
  }
  display(picture, lampshade) {
    push();

    image(picture, this.x, this.y, 2 * this.radius, 220 * this.resize);
    image(lampshade, 0, 0, 1000 * this.resize, 600 * this.resize);

    pop();
  }
  move() {
    push();

    if (
      mouseIsPressed &&
      mouseX >= this.x + this.xDistance - this.radius &&
      mouseX <= this.x + this.xDistance + this.radius &&
      mouseY >= this.y + this.yDistance - this.radius &&
      mouseY <= this.y + this.yDistance + this.radius
    ) {
      if (mouseY >= this.yMin && mouseY <= this.yMax) {
        this.y = mouseY - this.yDistance;
        if (mouseY >= this.yMax - 10 * this.resize) {
          this.y = this.yMin - this.yDistance;
          if (this.day === true) {
            this.day = false;
            console.log("Tag");
          } else if (this.day === false) {
            this.day = true;
            console.log("Nacht");
          }
        }
      }
    }
    pop();
  }
}
