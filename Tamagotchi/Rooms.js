export default class Rooms {
  constructor(x, y, state, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.state = state;
  }
  display(
    kitchenPic,
    bedroomPic,
    funroomPic,
    bathroomPic,
    cuttingboardPic,
    drinkingPic
  ) {
    push();
    if (this.state === "kitchen") {
      //image(pictures["kitchen"]["pic"], this.x, this.y, this.width, this.height);
      image(kitchenPic, this.x, this.y, this.width, this.height);
    } else if (this.state === "bedroom") {
      image(bedroomPic, this.x, this.y, this.width, this.height);
    } else if (this.state === "funroom") {
      image(funroomPic, this.x, this.y, this.width, this.height);
    } else if (this.state === "bathroom") {
      image(bathroomPic, this.x, this.y, this.width, this.height);
    } else if (this.state === "cuttingboard") {
      image(cuttingboardPic, this.x, this.y, this.width, this.height);
    } else if (this.state === "drinking") {
      image(drinkingPic, this.x, this.y, this.width, this.height);
    }
    pop();
  }
}
