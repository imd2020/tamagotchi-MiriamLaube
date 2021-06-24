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
    this.tutorial1 = loadImage("pictures/tutorial/bunnyTutorual.png");
    this.tutorial2 = loadImage("pictures/tutorial/buttonTutorial.png");
    this.tutorial3 = loadImage("pictures/tutorial/livingRoomTutorial.png");
    this.tutorial4 = loadImage("pictures/tutorial/bedRoomTutorial.png");
    this.tutorial5 = loadImage("pictures/tutorial/bathRoomTutorial.png");
    this.tutorial6 = loadImage("pictures/tutorial/kitchenTutorial1.png");
    this.tutorial7 = loadImage("pictures/tutorial/kitchenTutorial2.png");
    this.tutorial8 = loadImage("pictures/tutorial/cuttingTutorial.png");
    this.tutorial9 = loadImage("pictures/tutorial/kitchenTutorial3.png");
    this.tutorial10 = loadImage("pictures/tutorial/DrinkTutorial.png");
    this.start = loadImage("pictures/tutorial/playButton.png");
    this.endhappy = loadImage("pictures/tutorial/youSurvived.png");
    this.endsad = loadImage("pictures/tutorial/youDiedText.png");
  }
  display() {
    push();

    if (this.state === "tutorial") {
      this.sequence = [
        this.tutorial1,
        this.tutorial2,
        this.tutorial3,
        this.tutorial4,
        this.tutorial5,
        this.tutorial6,
        this.tutorial7,
        this.tutorial8,
        this.tutorial9,
        this.tutorial10,
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
      image(this.start, this.x, this.y, this.gameWidth, this.gameHeight);
    }
    if (this.state === "failed") {
      image(this.endsad, this.x, this.y, this.gameWidth, this.gameHeight);
    }
    if (this.state === "survived") {
      image(this.endhappy, this.x, this.y, this.gameWidth, this.gameHeight);
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
