export default class Tamagotchi {
  constructor(x, y, tamagotchiWidth, tamagotchiHeight, state) {
    this.x = x;
    this.y = y;
    this.tamagotchiHeight = tamagotchiHeight;
    this.tamagotchiWidth = tamagotchiWidth;
    this.state = state;
  }
  display(happyBun, sadBun, tiredBun) {
    push();

    if (this.state === "happy") {
      image(happyBun, this.x, this.y, this.tamagotchiWidth, this.tamagotchiHeight);
    } else if (this.state === "sad") {
      image(
        sadBun,
        this.x - 20,
        this.y + 150,
        this.tamagotchiWidth + 60,
        this.tamagotchiHeight - 150
      );
    } else if (this.state === "tired") {
      image(
        tiredBun,
        this.x + 120,
        this.y + 50,
        this.tamagotchiWidth + 200,
        this.tamagotchiHeight - 200
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
