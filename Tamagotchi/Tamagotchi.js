export default class Tamagotchi {
  constructor(x, y, width, height, state) {
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.state = state;
  }
  display(happyBun, sadBun, tiredBun) {
    push();
    if (this.state === "happy") {
      image(happyBun, this.x - 520, this.y - 400, this.width, this.height);
    } else if (this.state === "sad") {
      image(sadBun, this.x - 250, this.y - 200, this.width, this.height);
    } else if (this.state === "tired") {
      image(tiredBun, this.x - 200, this.y - 200, this.width, this.height);
    }
    pop();
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x - this.width / 2 &&
      mouseX <= this.x + this.width / 2 &&
      mouseY >= this.y - this.height / 2 &&
      mouseY <= this.y + this.height / 2
    ) {
      return true;
    }
  }
}
