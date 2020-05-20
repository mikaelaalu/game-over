// let person;
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
let gravity = 1;

function preload() {
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
  virusImg = loadImage("/images/coronavirus.png");
}

function setup() {
  createCanvas(1300, 700);

  hero = new Hero();
  // hero = createSprite(200, 100, 100, 100);

  obstacles = new Group();

  obstacle = createSprite(800, 600, 100, 200);
  obstacle2 = createSprite(600, 650, 300, 100);

  obstacles.add(obstacle);
  obstacles.add(obstacle2);

  // obstacle2.setCollider("rectangle", 30, 0, 100, 100);
  // obstacle2.setCollider("rectangle", 0, 0, 300, 100);
}

// function intersects(other) {
//   const distance = dist(this.xx, this.yy, other.x, other.y);

//   if (distance + 50 < this.r + other.r) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function looseLife() {
//   life = life - 1;
//   displayLife.innerHTML = life;

//   if (life === 0) {
//     hero.die(points);
//   }
// }

function jump() {
  console.log("JUMP");
  hero.hero.velocity.y = -15;
}

function moveLeft() {
  hero.hero.position.x -= 10;
}

function moveRight() {
  hero.hero.position.x += 10;
}

function draw() {
  background(backgroundImg);

  hero.hero.collide(obstacles);
  hero.hero.velocity.y += gravity;

  // console.log(hero.position.y);
  // console.log(obstacle.position.y);

  if (hero.hero.position.y >= window.innerHeight - 68) {
    hero.hero.velocity.y = 0;
    hero.hero.position.y = window.innerHeight - 68;
  }

  // console.log("velocityY: " + hero.velocity.y);

  // console.log(hero.collide(obstacle));

  if (keyIsDown(LEFT_ARROW)) {
    moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    moveRight();
    // hero.changeAnimation("runningRight");
  }
  if (keyWentDown(" ")) {
    if (hero.hero.overlap(obstacles)) jump();
    else if (hero.hero.position.y == window.innerHeight - 68) {
      jump();
    }
  }

  if (random(1) < 0.006) {
    papersArray.push(
      new Item(paperImg, 50, 3, Math.floor(Math.random() * 600) + 1)
    );
  }

  if (random(1) < 0.006) {
    soapsArray.push(
      new Item(soapImg, 50, 3, Math.floor(Math.random() * 600) + 1)
    );
  }
  if (random(1) < 0.006) {
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
