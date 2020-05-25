let grassImg;
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
let ground;

const startGameBtn = document.querySelector(".play-btn");
const playContainer = document.querySelector(".play-game-container");
const infoBox = document.querySelector(".info-box");

startGameBtn.addEventListener("click", function () {
  playContainer.classList.add("display-none");
  infoBox.classList.add(".display-block");
  loop();
});

function preload() {
  grassImg = loadImage("/images/grass.png");
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
  virusImg = loadImage("/images/coronavirus.png");
}

function setup() {
  noLoop();
  createCanvas(windowWidth, windowHeight);
  ground = windowHeight - 120;
  hero = new Hero();

  frameRate(30);

  monsterVirus = new MonsterVirus();
  obstacles = new Group();

  obstacle2 = createSprite(600, ground - 80, 300, 300);

  stump = createSprite(950, ground + 100, 100, 100);
  bush = createSprite(200, ground + 150, 100, 100);

  tree = createSprite(1300, ground - 80, 300, 300);

  grassA = createSprite(0, windowHeight + 50, windowWidth, 50);
  cloud = createSprite(150, 300, 200, 200);
  cloud2 = createSprite(1000, 300, 200, 200);

  obstacle2.addAnimation("house", "/images/cabin.png");
  cloud.addAnimation("cloud", "/images/cloud/cloud1.png");
  stump.addAnimation("stump", "/images/stump.png");

  bush.addAnimation("bush", "/images/bush.png");

  cloud2.addAnimation("cloud", "/images/cloud/cloud2.png");

  tree.addAnimation("tree", "/images/oak.png");

  tree.scale = 0.08;
  cloud.scale = 0.8;
  cloud2.scale = 0.5;
  stump.scale = 0.03;
  bush.scale = 0.5;

  tree.setCollider("rectangle", 0, 0, 5000, 4000);

  cloud.setCollider("rectangle", 0, 50, 300, 50);

  cloud2.setCollider("rectangle", -60, 30, 200, 50);

  obstacle2.scale = 0.3;
  obstacle2.setCollider("rectangle", -7, 50, 1100, 1200);
  stump.setCollider("rectangle", 0, 0, 3500, 3000);
  bush.setCollider("rectangle", 0, 0, 100, 100);

  obstacles.add(obstacle2);
  obstacles.add(stump);
  obstacles.add(bush);
  obstacles.add(tree);
  obstacles.add(cloud);
  obstacles.add(cloud2);
  grassA.addImage(grassImg);
}

function draw() {
  background(113, 214, 230);

  hero.hero.collide(obstacles);
  hero.hero.velocity.y += gravity;

  monsterVirus.showMonsterVirus();

  if (hero.hero.overlap(monsterVirus.monsterVirus)) {
    monsterVirus.monsterVirus.remove();
    hero.looseLife();
  }

  hero.hero.changeAnimation("idle");

  if (hero.hero.position.y >= ground) {
    hero.hero.velocity.y = 0;
    hero.hero.position.y = ground;
  }

  if (keyIsDown(LEFT_ARROW)) {
    hero.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    hero.moveRight();
  }

  if (keyWentDown(" ")) {
    if (hero.hero.overlap(obstacles)) hero.jump();
    else if (hero.hero.position.y == ground) {
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

  //Uncomment below for debug
  // obstacle2.debug = mouseIsPressed;
  // hero.hero.debug = mouseIsPressed;
  // tree.debug = mouseIsPressed;
  // cloud.debug = mouseIsPressed;
  // cloud2.debug = mouseIsPressed;
  // stump.debug = mouseIsPressed;
  // bush.debug = mouseIsPressed;

  drawSprites();
}
