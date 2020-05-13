let person;
let avatarImg;
let paperImg;
let backgroundImg;
let soapImg;
let virusImg;
let virusArray = [];
let papersArray = [];
let soapsArray = [];

function preload() {
  avatarImg = loadImage("/images/avatar.png");
  paperImg = loadImage("/images/paper.png");
  backgroundImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
  virusImg = loadImage("/images/coronavirus.png");
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

  if (keyIsDown(LEFT_ARROW)) {
    person.moveLeft();
  } else if (keyIsDown(RIGHT_ARROW)) {
    person.moveRight();
  }
}
