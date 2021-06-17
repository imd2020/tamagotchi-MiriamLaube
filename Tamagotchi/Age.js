export default class Age {
  constructor() {
    this.x = 815;
    this.y = 670;
  }
  ageCounter(frame) {
    textSize(24);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text("I am " + age + " years old", this.x + 5, this.y);
    textSize(16);
    strokeWeight(3.5);
    text("Try to reach the age of 12!", this.x, this.y + 50);
    if (age <= 12 && this.frame % 300 === 0) {
      age = age + 1;
    }
  }
}
