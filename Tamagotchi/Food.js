angleMode(DEGREES);
export default class Food {
  constructor(x, y, xFeed, yFeed, number, stateShow, resize) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.xFeed = xFeed * this.resize;
    this.yFeed = yFeed * this.resize;
    this.stateShow = stateShow;
    this.foods = [
      "cherry",
      "potato",
      "salad",
      "cake",
      "apple",
      "bread",
      "nuts",
      "banana",
      "tomato",
      "sushi",
    ];
    this.randomNumber = [];
    this.number = number;
  }
  display(picture) {
    if (this.stateShow === true) {
      push();
      translate(mouseX, mouseY);
      rotate(10);
      image(
        picture,
        -50 * this.resize,
        -50 * this.resize,
        100 * this.resize,
        100 * this.resize
      );
      pop();
    }
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x &&
      mouseX <= this.x + 150 * this.resize &&
      mouseY >= this.y &&
      mouseY <= this.y + 150 * this.resize
    ) {
      return true;
    }
  }
  hitTestFeed() {
    push();
    if (
      mouseIsPressed &&
      mouseX >= this.xFeed &&
      mouseX <= this.xFeed + 100 * this.resize &&
      mouseY >= this.yFeed &&
      mouseY <= this.yFeed + 125 * this.resize
    ) {
      return true;
    }
    pop();
  }
}
