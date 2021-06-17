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
      image(happyBun, this.x, this.y, this.width, this.height);
    } else if (this.state === "sad") {
      image(
        sadBun,
        this.x - 20,
        this.y + 150,
        this.width + 60,
        this.height - 150
      );
    } else if (this.state === "tired") {
      image(
        tiredBun,
        this.x + 120,
        this.y + 50,
        this.width + 200,
        this.height - 200
      );
    }
    pop();
  }
  hitTest(x, y) {
    if (
      mouseIsPressed &&
      mouseX >= x &&
      mouseX <= x + 200 &&
      mouseY >= y &&
      mouseY <= y + 500
    ) {
      return true;
    }
  }
}
