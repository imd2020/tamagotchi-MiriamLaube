angleMode(DEGREES);
import Parameter from "./Parameter.js";
import Ball from "./Ball.js";
import Tamagotchi from "./Tamagotchi.js";
import LampCord from "./LampCord.js";
import Rooms from "./Rooms.js";
import Buttons from "./Buttons.js";
import Water from "./Water.js";
import Bar from "./Bar.js";
import Poo from "./Poo.js";
import Food from "./Food.js";

//variables
let sadOrHappy = true;
let visible = true;
let time = [0];
let x = [];
let y = [];
let foodWord = [];
let word = [];
let finalFoodWord = "";
let bunnystate = "happy";
let state = "funroom";
let bunnyX = 0;
let bunnyY = 0;
let cinnamonRollsNumber = 0;
let radius = 80;
let yButton = 670;

// init objects
let cinnamonRoll = new Food(100, 350, 25, 300, 0, false);
let tired = new Parameter(135, 750, 100);
let hungry = new Parameter(135 + 150, 750, 100);
let poop = new Parameter(135 + 150 * 2, 750, 100);
let happy = new Parameter(135 + 150 * 3, 750, 100);
let thirsty = new Parameter(135 + 150 * 4, 750, 100);
let sleepButton = new Buttons(150, yButton, radius);
let eatButton = new Buttons(300, yButton, radius);
let poopButton = new Buttons(450, yButton, radius);
let funButton = new Buttons(600, yButton, radius);
let drinkButton = new Buttons(900, 500, 100);
let cinnamonRolls = new Buttons(250, 450, 100);
let lampCord = new LampCord(750, 450, 45, 450, 510, true, 80, 135);
let ball = new Ball(300, 450, 250, 300, 0, true, 10);
let bar = new Bar(700, 130, 20, 20);
let water = new Water(240, 130, 270, 130, 400, false);

//load pictures
let poopPic = loadImage("pooPicture.png");
let waterPicture = loadImage("drinkPicture.jpg");
let bathroomPicture = loadImage("bathroomPicture.png");
let kitchenPicture = loadImage("kitchenPicture.jpg");
let bedroomPicture = loadImage("bedroomPicture.jpg");
let funroomPicture = loadImage("funroomPicture.jpg");
let eatButtonPicture = loadImage("eatingButton.png");
let sleepButtonPicture = loadImage("sleepButton.png");
let funButtonPicture = loadImage("happyButton.png");
let drinkButtonPicture = loadImage("drinkButton.png");
let poopButtonPicture = loadImage("poopButton.png");
let cordPicture = loadImage("lampCordPicture.png");
let ballPicture = loadImage("ballPicture.png");
let lampshadePicture = loadImage("lampshade.png");
let cuttingBoardPicture = loadImage("cuttingBoardPicture.jpg");
let drinkingPicture = loadImage("drinkingPicture.jpg");
let sleepyBunny = loadImage("sleepyBunny.png");
let happyBunny = loadImage("happyBunny.png");
let sadBunny = loadImage("sadBunny.png");
let cinnamon = loadImage("cinnamon.png");

function keyPressed() {
  foodWord.push(key);
  if (keyIsDown(8)) {
    foodWord.pop();
    foodWord.pop();
  }
  if (keyIsDown(13)) {
    foodWord.pop();
  }
  if (keyIsDown(32)) {
    foodWord.pop();
    foodWord.push(" ");
  }
  finalFoodWord = foodWord.join("");
}

function draw() {
  push();

  //Button
  clear();
  background(255);
  if (sleepButton.hitTest()) {
    state = "bedroom";
  }
  if (eatButton.hitTest()) {
    state = "kitchen";
  }
  if (poopButton.hitTest()) {
    state = "bathroom";
  }
  if (funButton.hitTest()) {
    state = "funroom";
  }
  if (state === "kitchen") {
    if (cinnamonRolls.hitTest()) {
      state = "cuttingboard";
    }
    if (drinkButton.hitTest()) {
      state = "drinking";
    }
  }

  //roooms
  let room = new Rooms(0, 0, state, 1000, 600);
  room.display(
    kitchenPicture,
    bedroomPicture,
    funroomPicture,
    bathroomPicture,
    cuttingBoardPicture,
    drinkingPicture
  );

  //bunny
  let bunny = new Tamagotchi(bunnyX, bunnyY, 1040, 800, bunnystate);
  if (sadOrHappy === true) {
    if (
      tired.parameter <= 30 ||
      hungry.parameter <= 30 ||
      poop.parameter <= 30 ||
      happy.parameter <= 30 ||
      thirsty.parameter <= 30
    ) {
      bunnystate = "sad";
    } else if (
      tired.parameter >= 30 ||
      hungry.paramteter >= 30 ||
      poop.paramteter >= 30 ||
      happy.paramteter >= 30 ||
      thirsty.paramteter >= 30
    ) {
      bunnystate = "happy";
    }
  } else if (sadOrHappy === false) {
    bunnystate = "tired";
  }
  bunny.display(happyBunny, sadBunny, sleepyBunny);

  //parameter
  sleepButton.display(sleepButtonPicture);
  eatButton.display(eatButtonPicture);
  poopButton.display(poopButtonPicture);
  funButton.display(funButtonPicture);
  tired.display();
  hungry.display();
  poop.display();
  happy.display();
  thirsty.display();
  if (frameCount % 100 === 0) {
    if (tired.parameter >= 0) {
      tired.parameter = tired.parameter - 1;
    }
    if (hungry.parameter >= 0) {
      hungry.parameter = hungry.parameter - 1;
    }
    if (poop.parameter >= 0) {
      poop.parameter = poop.parameter - 1;
    }
    if (happy.parameter >= 0) {
      happy.parameter = happy.parameter - 1;
    }
    if (thirsty.parameter >= 0) {
      thirsty.parameter = thirsty.parameter - 1;
    }
  }

  //function of the rooms
  if (state === "bedroom") {
    sadOrHappy = false;
    bunnyX = 100;
    bunnyY = 150;
    lampCord.display(cordPicture, lampshadePicture);
    lampCord.move();
    if (lampCord.day === false) {
      if (tired.parameter < 100 && frameCount % 50 === 0) {
        tired.parameter = tired.parameter + 1;
      }

      fill(60, 60, 60, 63);
      rect(0, 0, 1000, 600);
    }
    //if your are not in the bedroom the light is turned on.
  } else if (state != "bedroom") {
    sadOrHappy = true;
    lampCord.day = true;
  }
  //fun
  if (state === "funroom") {
    bunnyX = 600;
    bunnyY = 300;
    ball.display(ballPicture);
    ball.hitTest();
    if (
      mouseIsPressed &&
      tired.parameter >= 30 &&
      hungry.parameter >= 30 &&
      poop.parameter >= 30 &&
      thirsty.parameter >= 30
    ) {
      if (frameCount % 50 === 0) {
        happy.parameter = happy.parameter + 1;
      }
    }
  }
  if (state === "kitchen") {
    if (cinnamonRollsNumber >= 1) {
      cinnamonRoll.hitTestFeed();
      cinnamonRoll.display(cinnamon);
      if (bunny.hitTest) {
        cinnamonRoll.stateShow = false;
        cinnamonRollsNumber--;
      }
    }

    bunnyX = 600;
    bunnyY = 300;
    drinkButton.display(drinkButtonPicture);
    textSize(80);
    text(cinnamonRoll.number, 50, 400);
    water.y = 130;
    water.height = 270;
  }
  if (state === "drinking") {
    image(waterPicture, 0, 0, 1000, 600);
    water.display();
    water.rise();
    water.fall();
    bar.display(water.y);

    if (bar.hitTest(water.y)) {
      thirsty.parameter = 100;
      state = "kitchen";
    }
  }
  if (state === "cuttingboard") {
    if (cinnamonRoll.randomNumber.length < 1) {
      cinnamonRoll.randomNumber.push(Math.ceil(random(-1, 9)));
      word.push(cinnamonRoll.foods[cinnamonRoll.randomNumber[0]]);
    }
    image(cuttingBoardPicture, 0, 0, 1000, 600);
    textSize(100);
    text(word[0], 530, 200);
    textSize(150);
    fill(255);
    stroke(0);
    strokeWeight(5);
    text(finalFoodWord, 200, 400);
    if (keyIsDown(13)) {
      if (finalFoodWord === word[0]) {
        fill(0, 255, 0);
        cinnamonRoll.randomNumber.pop();
        word.pop();
        foodWord.splice(0, foodWord.length);
        finalFoodWord = "";
        cinnamonRoll.number++;
      }
    }
  }
  if (state === "bathroom") {
    bunnyX = 600;
    bunnyY = 300;
    if (poop.parameter <= 75) {
      if (x.length <= 1) {
        x.push(random(50, 700));
        y.push(random(450, 550));
      }
      time[0] = time[0] + 1;
      if (mouseIsPressed && time[0] >= 100) {
        time[0] = 0;
      }
      let poop = new Poo(x[0], y[0], visible);
      poop.display(time[0], poopPic);
      if (poop.hitTest) {
        poop.parameter = poop.parameter + 25;
      }
      if (time > 100) {
        y.splice(0, 1, random(450, 550));
        x.splice(0, 1, random(50, 950));
      }
    }
  }
  pop();
}
