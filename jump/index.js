let person;
let uImg;
let paperImg;
let bImg;
let soapImg;

let papers = [];
let soaps = [];
let runRightImages = [];
let runLeftImages = [];

let spritePaths = [];

function preload() {
  spritePaths = [
    "/images/hero/Run__001.png",
    "/images/hero/Run__002.png",
    "/images/hero/Run__003.png",
    "/images/hero/Run__004.png",
    "/images/hero/Run__005.png",
    "/images/hero/Run__006.png",
    "/images/hero/Run__007.png",
    "/images/hero/Run__008.png",
    "/images/hero/Run__009.png",
  ];

  spritePathsLeft = [
    "/images/hero/left-rotated/Run__001.png",
    "/images/hero/left-rotated/Run__002.png",
    "/images/hero/left-rotated/Run__003.png",
    "/images/hero/left-rotated/Run__004.png",
    "/images/hero/left-rotated/Run__005.png",
    "/images/hero/left-rotated/Run__006.png",
    "/images/hero/left-rotated/Run__007.png",
    "/images/hero/left-rotated/Run__008.png",
    "/images/hero/left-rotated/Run__009.png",
  ];

  spritePaths.map((spriteImage) =>
    loadImage(spriteImage, (image) => {
      runRightImages.push(image);
    })
  );

  spritePathsLeft.map((spriteImage) =>
    loadImage(spriteImage, (image) => {
      runLeftImages.push(image);
    })
  );

  // u-Img = loadImage("/images/avatar.png");
  paperImg = loadImage("/images/paper.png");
  bImg = loadImage("/images/background.jpg");
  soapImg = loadImage("/images/soap.png");
}
function setup() {
  createCanvas(1300, 700);
  person = new Person();
  hero = runRightImages[0];
}

function keyPressed() {
  if (key == " ") {
    person.jump();
  }
}

function draw() {
  background(bImg);
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
    // uImg = loadImage(runAnimationRight[frameCount % runAnimationRight.length]);
  } else if (keyIsDown(RIGHT_ARROW)) {
    person.moveRight();
  }

  const item = new Item();
  item.displayRandom(soaps);
  item.displayRandom(papers);
}
