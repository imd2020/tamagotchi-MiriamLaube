export default class Age {
  constructor(resize) {
    this.resize = resize;
    this.x = 815 * this.resize;
    this.y = 670 * this.resize;
  }
  ageCounter(age) {
    textSize(24 * this.resize);
    fill(255);
    stroke(0);
    strokeWeight(4 * this.resize);
    text("I am " + age + " years old", this.x, this.y);
    textSize(16 * this.resize);
    strokeWeight(3.5 * this.resize);
    text(
      "Try to reach the age of 12!",
      this.x - 10 * this.resize,
      this.y + 50 * this.resize
    );
  }
}
