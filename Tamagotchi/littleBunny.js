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
import Age from "./Age.js";
import Game from "./Game.js";

//variables
let sadOrHappy = true;
let visible = true;
let time = [0];
let bathroomCoordinat = { x: [], y: [] };
let food = { word: [], list: [] };
let finalFoodWord = "";
let state = { bunny: "happy", room: "funroom" };
let age = 0;
let bunnyCoordinate = { x: 0, y: 0 };
let button = { y: 670, radius: 80 };

// init objects
let game = new Game("start");
let ageText = new Age();
let cinnamonRoll = new Food(200, 400, 25, 300, 0, false);
let tired = new Parameter(135);
let hungry = new Parameter(135 + 150);
let poop = new Parameter(135 + 150 * 2);
let happy = new Parameter(135 + 150 * 3);
let thirsty = new Parameter(135 + 150 * 4);
let sleepButton = new Buttons(150, button.y, button.radius);
let eatButton = new Buttons(300, button.y, button.radius);
let poopButton = new Buttons(450, button.y, button.radius);
let funButton = new Buttons(600, button.y, button.radius);
let drinkButton = new Buttons(900, 500, 100);
let lampCord = new LampCord(750, 450, 45, 450, 510, true, 80, 135);
let ball = new Ball(300, 450, 250, 300, 0, true, 10);
let bar = new Bar(700, 130, 20, 20);
let water = new Water(240, 130, 270, 130, 400, false);

//load pictures
let poopPic = loadImage("pictures/pooPicture.png");
let waterPicture = loadImage("pictures/drinkPicture.jpg");
let bathroomPicture = loadImage("pictures/bathroomPicture.png");
let kitchenPicture = loadImage("pictures/kitchenPicture.jpg");
let bedroomPicture = loadImage("pictures/bedroomPicture.jpg");
let funroomPicture = loadImage("pictures/funroomPicture.jpg");
let eatButtonPicture = loadImage("pictures/eatingButton.png");
let sleepButtonPicture = loadImage("pictures/sleepButton.png");
let funButtonPicture = loadImage("pictures/happyButton.png");
let drinkButtonPicture = loadImage("pictures/drinkButton.png");
let poopButtonPicture = loadImage("pictures/poopButton.png");
let cordPicture = loadImage("pictures/lampCordPicture.png");
let ballPicture = loadImage("pictures/ballPicture.png");
let lampshadePicture = loadImage("pictures/lampshade.png");
let cuttingBoardPicture = loadImage("pictures/cuttingBoardPicture.jpg");
let drinkingPicture = loadImage("pictures/drinkPicture.jpg");
let sleepyBunny = loadImage("pictures/sleepyBunny.png");
let happyBunny = loadImage("pictures/happyBunny.png");
let sadBunny = loadImage("pictures/sadBunny.png");
let cinnamon = loadImage("pictures/cinnamon.png");


function keyPressed() {
  food.word.push(key);
  if (keyIsDown(8)) {
    food.word.pop();
    food.word.pop();
  }
  if (keyIsDown(13)) {
    food.word.pop();
  }
  if (keyIsDown(32)) {
    food.word.pop();
    food.word.push(" ");
  }
  finalFoodWord = food.word.join("");
}
window.keyPressed = keyPressed;

function draw() {
  clear();

  game.display();
  if (game.state === "game") {
    rect(0, 0, 1000, 800);
    if (age < 12 && frameCount % 1200 === 0) {
      age = age + 1;
    }
    ageText.ageCounter(age);
    //Button
    if (sleepButton.hitTest()) {
      state.room = "bedroom";
    }
    if (eatButton.hitTest()) {
      state.room = "kitchen";
    }
    if (poopButton.hitTest()) {
      state.room = "bathroom";
    }
    if (funButton.hitTest()) {
      state.room = "funroom";
    }
    if (state.room === "kitchen") {
      if (cinnamonRoll.hitTestFeed()) {
        state.room = "cuttingboard";
      }
      if (drinkButton.hitTest()) {
        state.room = "drinking";
      }
    }

    //roooms
    let room = new Rooms(0, 0, state.room, 1000, 600);
    room.display(
      kitchenPicture,
      bedroomPicture,
      funroomPicture,
      bathroomPicture,
      cuttingBoardPicture,
      drinkingPicture
    );

    //bunny
    let bunny = new Tamagotchi(
      bunnyCoordinate.x,
      bunnyCoordinate.y,
      200,
      500,
      state.bunny
    );

    if (sadOrHappy === true) {
      if (
        tired.parameter <= 30 ||
        hungry.parameter <= 30 ||
        poop.parameter <= 30 ||
        happy.parameter <= 30 ||
        thirsty.parameter <= 30
      ) {
        state.bunny = "sad";
      } else if (
        tired.parameter >= 30 ||
        hungry.paramteter >= 30 ||
        poop.paramteter >= 30 ||
        happy.paramteter >= 30 ||
        thirsty.paramteter >= 30
      ) {
        state.bunny = "happy";
      }
    } else if (sadOrHappy === false) {
      state.bunny = "tired";
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
      if (tired.parameter > 0) {
        tired.parameter = tired.parameter - 1;
      }
      if (hungry.parameter > 0) {
        hungry.parameter = hungry.parameter - 1;
      }
      if (poop.parameter > 0) {
        poop.parameter = poop.parameter - 1;
      }
      if (happy.parameter > 0) {
        happy.parameter = happy.parameter - 1;
      }
      if (thirsty.parameter > 0) {
        thirsty.parameter = thirsty.parameter - 1;
      }
    }

    //function of the rooms
    if (state.room === "bedroom") {
      sadOrHappy = false;
      bunnyCoordinate.x = 100;
      bunnyCoordinate.y = 150;
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
    } else if (state.room != "bedroom") {
      sadOrHappy = true;
      lampCord.day = true;
    }
    //fun
    if (state.room === "funroom") {
      bunnyCoordinate.x = 600;
      bunnyCoordinate.y = 100;
      ball.display(ballPicture);
      if (
        mouseIsPressed &&
        tired.parameter >= 30 &&
        hungry.parameter >= 30 &&
        poop.parameter >= 30 &&
        thirsty.parameter >= 30
      ) {
        ball.hitTest();
        if (frameCount % 50 === 0) {
          happy.parameter = happy.parameter + 1;
        }
      } else if (
        tired.parameter < 30 ||
        hungry.parameter < 30 ||
        poop.parameter < 30 ||
        thirsty.parameter < 30
      ) {
        textSize(100);
        fill(255);
        stroke(0);
        strokeWeight(5);
        text("I don't want to play", 200, 400);
      }
    }
    if (state.room === "kitchen") {
      console.log(cinnamonRoll.number);
      if (cinnamonRoll.number > 0) {
        if (cinnamonRoll.hitTest) {
          cinnamonRoll.stateShow = true;
        }
        cinnamonRoll.display(cinnamon);
        if (
          bunny.hitTest(bunnyCoordinate.x, bunnyCoordinate.y) &&
          cinnamonRoll.stateShow === true
        ) {
          cinnamonRoll.stateShow = false;
          cinnamonRoll.number = cinnamonRoll.number - 1;
          if (hungry.parameter < 90) {
            hungry.parameter = hungry.parameter + 10;
          } else {
            hungry.parameter = 100;
          }
        }
      }

      bunnyCoordinate.x = 600;
      bunnyCoordinate.y = 100;
      drinkButton.display(drinkButtonPicture);
      textSize(80);
      text(cinnamonRoll.number, 50, 400);
      water.y = 130;
      water.waterHeight = 270;
    }
    if (state.room === "drinking") {
      image(waterPicture, 0, 0, 1000, 600);
      water.display();
      water.rise();
      water.fall();
      bar.display(water.y);

      if (bar.hitTest(water.y)) {
        thirsty.parameter = 100;
        state.room = "kitchen";
      }
    }
    if (state.room === "cuttingboard") {
      if (cinnamonRoll.randomNumber.length < 1) {
        cinnamonRoll.randomNumber.push(Math.ceil(random(-1, 9)));
        food.list.push(cinnamonRoll.foods[cinnamonRoll.randomNumber[0]]);
      }
      image(cuttingBoardPicture, 0, 0, 1000, 600);
      textSize(100);
      text(food.list[0], 530, 200);
      textSize(150);
      fill(255);
      stroke(0);
      strokeWeight(5);
      text(finalFoodWord, 200, 400);
      if (keyIsDown(13)) {
        if (finalFoodWord === food.list[0]) {
          fill(0, 255, 0);
          cinnamonRoll.randomNumber.pop();
          food.list.pop();
          food.word.splice(0, food.word.length);
          finalFoodWord = "";
          cinnamonRoll.number++;
        }
      }
    }
    if (state.room === "bathroom") {
      bunnyCoordinate.x = 600;
      bunnyCoordinate.y = 100;
      if (poop.parameter <= 75) {
        if (bathroomCoordinat.x.length <= 1) {
          bathroomCoordinat.x.push(random(50, 700));
          bathroomCoordinat.y.push(random(450, 550));
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
          bathroomCoordinat.y.splice(0, 1, random(450, 550));
          bathroomCoordinat.x.splice(0, 1, random(50, 950));
        }
      }
    }
  }
  if (
    tired.parameter === 0 ||
    hungry.parameter === 0 ||
    poop.parameter === 0 ||
    happy.parameter === 0 ||
    thirsty.parameter === 0
  ) {
    game.state = "failed";
  }
  if (age === 12) {
    game.state = "survived";
  }
}
window.draw = draw;

function mouseClicked() {
  if (game.state === "tutorial") {
    if (game.hitTestTriangle() && game.i < 10) {
      game.i = game.i + 1;
      console.log(game.i);
    }

    if (game.hitTestTriangle() && game.i === 10) {
      game.state = "game";
    }
  }
  if (game.state === "start") {
    if (game.hitTestButton(240)) {
      console.log(game.i);
      game.state = "game";
    } else if (game.hitTestButton(530)) {
      console.log(game.state);
      game.state = "tutorial";
    }
  }
  if (game.state === "failed") {
    age = 0;
    tired.parameter = 0;
    hungry.parameter = 0;
    poop.parameter = 0;
    happy.parameter = 0;
    thirsty.parameter = 0;
    if (game.hitTestButton(385)) {
      game.state = "start";
    }
  }
  if (game.state === "survived") {
    age = 0;
    tired.parameter = 0;
    hungry.parameter = 0;
    poop.parameter = 0;
    happy.parameter = 0;
    thirsty.parameter = 0;
    if (game.hitTestButton(385)) {
      game.state = "start";
    }
  }
}
window.mouseClicked = mouseClicked;
