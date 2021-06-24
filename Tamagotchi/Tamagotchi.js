export default class Tamagotchi {
  constructor(x, y, tamagotchiWidth, tamagotchiHeight, resize, state) {
    this.resize = resize;
    this.x = x * this.resize;
    this.y = y * this.resize;
    this.tamagotchiHeight = tamagotchiHeight * this.resize;
    this.tamagotchiWidth = tamagotchiWidth * this.resize;
    this.state = state;
  }
  display(happyBun, sadBun, tiredBun) {
    push();

    if (this.state === "happy") {
      image(
        happyBun,
        this.x,
        this.y,
        this.tamagotchiWidth,
        this.tamagotchiHeight
      );
    } else if (this.state === "sad") {
      image(
        sadBun,
        this.x - 20 * this.resize,
        this.y + 150 * this.resize,
        this.tamagotchiWidth + 60 * this.resize,
        this.tamagotchiHeight - 150 * this.resize
      );
    } else if (this.state === "tired") {
      image(
        tiredBun,
        this.x - 420 * this.resize,
        this.y + 100 * this.resize,
        this.tamagotchiWidth + 200 * this.resize,
        this.tamagotchiHeight - 200 * this.resize
      );
    }
    pop();
  }
  hitTest() {
    if (
      mouseIsPressed &&
      mouseX >= this.x &&
      mouseX <= this.x + 200 * this.resize &&
      mouseY >= this.y &&
      mouseY <= this.y + 500 * this.resize
    ) {
      return true;
    }
  }
}
