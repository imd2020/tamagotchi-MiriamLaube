export default class LampCord {
  constructor(x, y, radius, yMin, yMax, day, xDistance, yDistance) {
    this.xDistance = xDistance;
    this.yDistance = yDistance;
    this.x = x - xDistance;
    this.y = y - yDistance;
    this.radius = radius;
    this.yMin = yMin;
    this.yMax = yMax;
    this.day = day;
  }
  display(picture, lampshade) {
    push();

    image(picture, this.x, this.y, 0, 0);
    image(lampshade, 0, 0, 1000, 600);

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
        if (mouseY >= this.yMax - 10) {
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
