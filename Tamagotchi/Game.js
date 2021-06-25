export default class Game {
  constructor(state, resize) {
    this.resize = resize;
    this.state = state;
    this.x = 0;
    this.y = 0;
    this.gameWidth = 1000 * this.resize;
    this.gameHeight = 600 * this.resize;
    this.sequence = [];
    this.i = 0;
  }
  display(
    tutorial1,
    tutorial2,
    tutorial3,
    tutorial4,
    tutorial5,
    tutorial6,
    tutorial7,
    tutorial8,
    tutorial9,
    tutorial10,
    start,
    endhappy,
    endsad
  ) {
    push();

    if (this.state === "tutorial") {
      this.sequence = [
        tutorial1,
        tutorial2,
        tutorial3,
        tutorial4,
        tutorial5,
        tutorial6,
        tutorial7,
        tutorial8,
        tutorial9,
        tutorial10,
      ];

      image(
        this.sequence[this.i],
        this.x,
        this.y,
        this.gameWidth,
        this.gameHeight
      );
      fill(255);
      stroke(0);
      strokeWeight(3 * this.resize);
      triangle(
        this.gameWidth - 100 * this.resize,
        this.gameHeight - 100 * this.resize,
        this.gameWidth - 50 * this.resize,
        this.gameHeight - 75 * this.resize,
        this.gameWidth - 100 * this.resize,
        this.gameHeight - 50 * this.resize
      );
    }

    if (this.state === "start") {
      image(start, this.x, this.y, this.gameWidth, this.gameHeight);
    }
    if (this.state === "failed") {
      image(endsad, this.x, this.y, this.gameWidth, this.gameHeight);
    }
    if (this.state === "survived") {
      image(endhappy, this.x, this.y, this.gameWidth, this.gameHeight);
    }

    pop();
  }

  hitTestButton(x) {
    push();

    if (
      mouseX >= x * this.resize - 100 * this.resize &&
      mouseX <= x * this.resize + 100 * this.resize &&
      mouseY >= 420 * this.resize - 100 * this.resize &&
      mouseY <= 420 * this.resize + 100 * this.resize
    ) {
      return true;
    }
    pop();
  }
  hitTestTriangle() {
    push();

    if (
      mouseX >= this.gameWidth - 100 * this.resize &&
      mouseX <= this.gameWidth - 50 * this.resize &&
      mouseY >= this.gameHeight - 100 * this.resize &&
      mouseY <= this.gameHeight - 50 * this.resize
    ) {
      return true;
    }
    pop();
  }
}
