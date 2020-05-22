let person;
let avatarImg;
let paperImg;
let backgroundImg;
let soapImg;

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

function preload() {
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
  virusImg = loadImage("/images/coronavirus.png");
}

function setup() {
  createCanvas(6000, 700);

  hero = new Hero();

  obstacles = new Group();

  obstacle = createSprite(800, 600, 100, 200);
  obstacle2 = createSprite(600, 650, 300, 100);
  obstacle3 = createSprite(1000, 650, 100, 100);

  obstacles.add(obstacle);
  obstacles.add(obstacle2);
  obstacles.add(obstacle3);
}

function draw() {
  background(113, 214, 230);

  // translate(-hero.hero.position.x, 0, hero.hero.position.z);

  hero.hero.collide(obstacles);
  hero.hero.velocity.y += gravity;

  if (hero.hero.position.y >= window.innerHeight - 215) {
    hero.hero.velocity.y = 0;
    hero.hero.position.y = window.innerHeight - 215;
  }

  if (keyIsDown(LEFT_ARROW)) {
    hero.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    hero.moveRight();
    // hero.changeAnimation("runningRight");
  }
  if (keyWentDown(" ")) {
    if (hero.hero.overlap(obstacles)) hero.jump();
    else if (hero.hero.position.y == window.innerHeight - 215) {
      hero.jump();
    }
  }

  if (random() < 0.02) {
    papersArray.push(
      new Item(paperImg, 50, 3, Math.floor(Math.random() * 600) + 1, "paper")
    );
  }

  if (random() < 0.02) {
    soapsArray.push(
      new Item(soapImg, 50, 3, Math.floor(Math.random() * 600) + 1, "soap")
    );
  }
  if (random() < 0.02) {
    virusArray.push(new Virus());
  }
  const virus = new Virus();
  virus.displayRandom(virusArray);

  const item = new Item();
  item.displayRandom(soapsArray);
  item.displayRandom(papersArray);

  hero.hero.debug = mouseIsPressed;
  obstacle.debug = mouseIsPressed;
  obstacle2.debug = mouseIsPressed;

  drawSprites();
}
