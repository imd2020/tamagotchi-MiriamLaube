angleMode(DEGREES);
export default class Food {
  constructor(x, y, xFeed, yFeed, number, stateShow) {
    this.x = x;
    this.y = y;
    this.xFeed = xFeed;
    this.yFeed = yFeed;
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
      image(picture, -50, -50, 100, 100);
      pop();
    }
  }
  hitTest() {
    if (
      mouseX >= this.x &&
      mouseX <= this.x + 150 &&
      mouseY >= this.y &&
      mouseY <= this.y + 150
    ) {
      return true;
    }
  }
  hitTestFeed() {
    push();
    if (
      mouseIsPressed &&
      mouseX >= this.xFeed &&
      mouseX <= this.xFeed + 100 &&
      mouseY >= this.yFeed &&
      mouseY <= this.yFeed + 125
    ) {
      this.stateShow = true;
    }
    pop();
  }
}
