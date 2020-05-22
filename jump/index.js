let person;
let avatarImg;
let paperImg;
let backgroundImg;
let soapImg;
let virus;
let item;

let papers = [];
let soaps = [];
let runRightImages = [];
let runLeftImages = [];

let spritePaths = [];

let virusImg;
let virusArray = [];
let papersArray = [];
let soapsArray = [];

let gravity = 2;
let backgroundMusic = new Audio("./sounds/smile.mp3");

const startGameBtn = document.querySelector(".play-btn");
const playContainer = document.querySelector(".play-game-container");
const infoBox = document.querySelector(".info-box");

startGameBtn.addEventListener("click", function () {
  backgroundMusic.play();
  backgroundMusic.volume = 0.1;
  playContainer.classList.add("display-none");
  infoBox.classList.add(".display-block");
});

function preload() {
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
  virusImg = loadImage("/images/coronavirus.png");
}

function setup() {
  createCanvas(windowWidth, 700);

  hero = new Hero();
  monsterVirus = new MonsterVirus();

  obstacles = new Group();

  obstacle = createSprite(800, 600, 100, 200);
  obstacle2 = createSprite(600, 650, 300, 100);
  obstacle3 = createSprite(1000, 650, 100, 100);
  obstacle4 = createSprite(2000, 650, 300, 300);
  obstacle5 = createSprite(1800, 650, 150, 100);
  obstacle6 = createSprite(3500, 650, 200, 150);
  obstacle7 = createSprite(4000, 650, 150, 200);
  obstacle8 = createSprite(5100, 650, 150, 100);

  obstacles.add(obstacle);
  obstacles.add(obstacle2);
  obstacles.add(obstacle3);
  obstacles.add(obstacle4);
  obstacles.add(obstacle5);
  obstacles.add(obstacle6);
  obstacles.add(obstacle7);
  obstacles.add(obstacle8);
}

function draw() {
  background(113, 214, 230);

  hero.hero.collide(obstacles);
  hero.hero.velocity.y += gravity;

  if (millis() > 1000000) {
    monsterVirus.monsterVirus.attractionPoint(
      0.2,
      hero.hero.position.x,
      hero.hero.position.y
    );
  } else if (millis() > 2000000) {
    monsterVirus.monsterVirus.attractionPoint(
      1.0,
      hero.hero.position.x,
      hero.hero.position.y
    );
  }

  if (hero.hero.overlap(monsterVirus.monsterVirus)) {
    hero.looseLife();
  }

  hero.hero.changeAnimation("idle");

  if (hero.hero.position.y >= window.innerHeight - 215) {
    hero.hero.velocity.y = 0;
    hero.hero.position.y = window.innerHeight - 215;
  }

  if (keyIsDown(LEFT_ARROW)) {
    hero.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    hero.moveRight();
  }
  if (keyWentDown(" ")) {
    if (hero.hero.overlap(obstacles)) hero.jump();
    else if (hero.hero.position.y == window.innerHeight - 215) {
      hero.jump();
    }
  }

  if (random(1) < 0.006) {
    papersArray.push(
      new Item(paperImg, 50, 3, Math.floor(Math.random() * 600) + 1, "paper")
    );
  }

  if (random(1) < 0.006) {
    soapsArray.push(
      new Item(soapImg, 50, 3, Math.floor(Math.random() * 600) + 1, "soap")
    );
  }
  if (random(1) < 0.006) {
    virusArray.push(new Virus());
  }
  virus = new Virus();
  virus.displayRandom(virusArray);

  item = new Item();
  item.displayRandom(soapsArray);
  item.displayRandom(papersArray);

  hero.hero.debug = mouseIsPressed;
  obstacle.debug = mouseIsPressed;
  obstacle2.debug = mouseIsPressed;

  drawSprites();
}
