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
//import gsap from "./gsap.min.js";

//variables
let resize = 2.3;
let sadOrHappy = true;
let food = { word: [], list: [] };
let finalFoodWord = "";
let state = { bunny: "happy", room: "funroom" };
let age = 0;
let button = { y: 670, radius: 80 };

// init objects
let game = new Game("start", resize);
let ageText = new Age(resize);
let cinnamonRoll = new Food(200, 400, 25, 300, 0, false, resize);
let tired = new Parameter(135, resize);
let hungry = new Parameter(135 + 150, resize);
let poop = new Parameter(135 + 150 * 2, resize);
let happy = new Parameter(135 + 150 * 3, resize);
let thirsty = new Parameter(135 + 150 * 4, resize);
let sleepButton = new Buttons(150, button.y, button.radius, resize);
let eatButton = new Buttons(300, button.y, button.radius, resize);
let poopButton = new Buttons(450, button.y, button.radius, resize);
let funButton = new Buttons(600, button.y, button.radius, resize);
let drinkButton = new Buttons(900, 500, 100, resize);
let lampCord = new LampCord(750, 450, 80, 450, 510, true, 80, 135, resize);
let ball = new Ball(300, 450, 250, 300, 0, true, 10, resize);
let bar = new Bar(700, 130, 20, 20, resize);
let water = new Water(240, 130, 270, 130, 400, false, resize);
let poopArray = [];
const zzzCoordinat = {
  x: 300 * resize,
  y: 300 * resize,
};

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
let moon = loadImage("moon.png");
let drink = loadImage("pictures/drinkPic.png");
let tutorial1 = loadImage("pictures/tutorial/bunnyTutorual.png");
let tutorial2 = loadImage("pictures/tutorial/buttonTutorial.png");
let tutorial3 = loadImage("pictures/tutorial/livingRoomTutorial.png");
let tutorial4 = loadImage("pictures/tutorial/bedRoomTutorial.png");
let tutorial5 = loadImage("pictures/tutorial/bathRoomTutorial.png");
let tutorial6 = loadImage("pictures/tutorial/kitchenTutorial1.png");
let tutorial7 = loadImage("pictures/tutorial/kitchenTutorial2.png");
let tutorial8 = loadImage("pictures/tutorial/cuttingTutorial.png");
let tutorial9 = loadImage("pictures/tutorial/kitchenTutorial3.png");
let tutorial10 = loadImage("pictures/tutorial/DrinkTutorial.png");
let start = loadImage("pictures/tutorial/playButton.png");
let endhappy = loadImage("pictures/tutorial/youSurvived.png");
let endsad = loadImage("pictures/tutorial/youDiedText.png");
let zzz = loadImage("pictures/zzz.png");

//https://p5js.org/examples/objects-array-of-objects.html und Hilfe von Herr Toepper
for (let i = 0; i < 5; i++) {
  poopArray.push(new Poo(resize));
}

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
//Hilfe von Leander und Max Mittelstädt
window.keyPressed = keyPressed;
function draw() {
  clear();

  game.display(
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
  );
  if (game.state === "game") {
    //rect(0, 0, 1000 * resize, 800 * resize);
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
    let room = new Rooms(0, 0, state.room, 1000, 600, resize);
    room.display(
      kitchenPicture,
      bedroomPicture,
      funroomPicture,
      bathroomPicture,
      cuttingBoardPicture,
      drinkingPicture
    );

    //bunny
    let bunny = new Tamagotchi(600, 100, 200, 500, resize, state.bunny);

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
    //button
    image(drink, 700 * resize, 645 * resize, 40 * resize, 60 * resize);
    sleepButton.display(sleepButtonPicture);
    eatButton.display(eatButtonPicture);
    poopButton.display(poopButtonPicture);
    funButton.display(funButtonPicture);

    //parameter
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

      lampCord.display(cordPicture, lampshadePicture);
      lampCord.move(moon);
      if (lampCord.day === false) {
        if (tired.parameter < 99 && frameCount % 50 === 0) {
          tired.parameter = tired.parameter + 2;
        }
        if (tired.parameter >= 99) {
          tired.parameter = 100;
        }
        image(zzz, zzzCoordinat.x, zzzCoordinat.y, 100 * resize, 100 * resize);
        fill(60, 60, 60, 63);
        rect(0, 0, 1000 * resize, 600 * resize);
      }
      //if your are not in the bedroom the light is turned on.
    } else if (state.room != "bedroom") {
      sadOrHappy = true;
      lampCord.day = true;
    }
    //fun
    if (state.room === "funroom") {
      strokeWeight(5 * resize);
      ball.display(ballPicture);
      if (
        mouseIsPressed &&
        tired.parameter >= 30 &&
        hungry.parameter >= 30 &&
        poop.parameter >= 30 &&
        thirsty.parameter >= 30
      ) {
        ball.hitTest();
        if (frameCount % 50 === 0 && happy.parameter < 99) {
          happy.parameter = happy.parameter + 2;
        }
        if (happy.parameter >= 99) {
          happy.parameter = 100;
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
        text("I don't want to play", 100 * resize, 200 * resize);
      }
    }
    if (state.room === "kitchen") {
      console.log(cinnamonRoll.number);
      if (cinnamonRoll.number > 0) {
        if (cinnamonRoll.hitTest) {
          cinnamonRoll.stateShow = true;
        }
        cinnamonRoll.display(cinnamon);
        if (bunny.hitTest() && cinnamonRoll.stateShow === true) {
          cinnamonRoll.stateShow = false;
          cinnamonRoll.number = cinnamonRoll.number - 1;
          if (hungry.parameter < 90) {
            hungry.parameter = hungry.parameter + 10;
          } else {
            hungry.parameter = 100;
          }
        }
      }

      drinkButton.display(drinkButtonPicture);
      textSize(80 * resize);
      strokeWeight(5 * resize);
      text(cinnamonRoll.number, 50 * resize, 400 * resize);
      water.y = 130 * resize;
      water.waterHeight = 270 * resize;
    }
    if (state.room === "drinking") {
      image(waterPicture, 0, 0, 1000 * resize, 600 * resize);
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
      image(cuttingBoardPicture, 0, 0, 1000 * resize, 600 * resize);
      textSize(100 * resize);
      text(food.list[0], 530 * resize, 200 * resize);
      textSize(150 * resize);
      fill(255);
      stroke(0);
      strokeWeight(5 * resize);
      text(finalFoodWord, 200, 400 * resize);
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
      let poopNumber = Math.round((100 - poop.parameter) / 20);
      //https://p5js.org/examples/objects-array-of-objects.html und Hilfe von Herr Toepper
      //for (let i = 0; i < poopArray.length; i++) {
      for (let i = 0; i < poopNumber; i++) {
        poopArray[i].display(poopPic);
        poopArray[i].hitTest();
        if (poopArray[i].hitTest() && poop.parameter <= 80) {
          poopArray[i].visible = false;
          poop.parameter = poop.parameter + 20;
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
//Hilfe von Leander und Max Mittelstädt
window.draw = draw;
//vgl Code von Herr Coenen
function animation() {
  gsap.to(zzzCoordinat, {
    duration: 2,
    ease: "easeInQuad",
    x: 270 * resize,
    y: 170 * resize,
    onComplete: () => {
      gsap.to(zzzCoordinat, {
        duration: 3,
        ease: "easeOutQuad",
        x: 300 * resize,
        y: 200 * resize,
        onComplete: () => {
          animation();
        },
      });
    },
  });
}
animation();
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
    tired.parameter = 100;
    hungry.parameter = 100;
    poop.parameter = 100;
    happy.parameter = 100;
    thirsty.parameter = 100;
    if (game.hitTestButton(385)) {
      game.state = "start";
    }
  }
  if (game.state === "survived") {
    age = 0;
    tired.parameter = 100;
    hungry.parameter = 100;
    poop.parameter = 100;
    happy.parameter = 100;
    thirsty.parameter = 100;
    if (game.hitTestButton(385)) {
      game.state = "start";
    }
  }
}
//Hilfe von Leander und Max Mittelstädt
window.mouseClicked = mouseClicked;
