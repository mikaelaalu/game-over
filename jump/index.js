let person;
let uImg;
let tImg;
let bImg;
let papers = [];

function preload() {
  uImg = loadImage("/images/avatar.png");
  tImg = loadImage("/images/paper.png");
  bImg = loadImage("/images/background.jpg");
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
  if (random(1) < 0.009) {
    papers.push(new Paper());
  }

  background(bImg);
  person.show();
  person.move();

  for (let i = 0; i < papers.length; i++) {
    const paper = papers[i];
    paper.move();
    paper.show();

    if (person.intersects(paper)) {
      papers.splice(i, 1);
    }
  }
}
