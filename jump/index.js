let person;
let avatarImg;
let paperImg;
let backgroundImg;
let soapImg;

let papers = [];
let soaps = [];

function preload() {
  avatarImg = loadImage("/images/avatar.png");
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
}

function setup() {
  createCanvas(1300, 700);
  person = new Person();
}

function keyPressed() {
  if (key == " ") {
    person.jump();
  }
}

function draw() {
  background(backgroundImg);
  person.show();
  person.move();

  if (random(1) < 0.006) {
    papers.push(new Item(paperImg, 50, 3, Math.floor(Math.random() * 600) + 1));
  }

  if (random(1) < 0.006) {
    soaps.push(new Item(soapImg, 50, 3, Math.floor(Math.random() * 600) + 1));
  }

  if (keyIsDown(LEFT_ARROW)) {
    person.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    person.moveRight();
  }

  const item = new Item();
  item.displayRandom(soaps);
  item.displayRandom(papers);
}
