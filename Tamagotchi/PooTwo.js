export default class Poo {
    constructor(x, y) {
      this.y = y;
      this.x = x;
    }
    display( picture) {
      push();
    
        image(picture, this.x - 50, this.y - 50, 100, 100);
  
      pop();
    }
    hitTest() {
      push();
      if (
        mouseIsPressed &&
        mouseX >= this.x &&
        mouseX <= this.x + 100 &&
        mouseY >= this.y &&
        mouseY <= this.y + 100
      ) {
       delete self;
      }
      pop();
    }
  }
  