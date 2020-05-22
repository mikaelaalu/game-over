let displayLife = document.querySelector(".life");
const reset = document.querySelector(".reset");
let life = 3;
let playAgain;
let playBtn;

class Hero {
  constructor() {
    this.hero = createSprite(200, 100, 100, 100);

    this.hero.setCollider("rectangle", 0, 0, 200, 475);
    this.r = 100;
    this.x = 50;
    this.vx = 10;
    this.y = height - this.r;
    this.vy = 0; //snabbhet y-axel

    displayLife.innerHTML = life;

    this.hero.addAnimation("standing", "/images/hero/Run__000.png");

    this.hero.scale = 0.5;

    this.hero.addAnimation(
      "runningRight",
      "/images/hero/Run__000.png",
      "/images/hero/Run__001.png",
      "/images/hero/Run__002.png",
      "/images/hero/Run__003.png",
      "/images/hero/Run__004.png",
      "/images/hero/Run__005.png",
      "/images/hero/Run__006.png",
      "/images/hero/Run__007.png",
      "/images/hero/Run__008.png",
      "/images/hero/Run__009.png"
    );

    this.hero.addAnimation(
      "runningLeft",
      "/images/hero/left-rotated/Run__000.png",
      "/images/hero/left-rotated/Run__001.png",
      "/images/hero/left-rotated/Run__002.png",
      "/images/hero/left-rotated/Run__003.png",
      "/images/hero/left-rotated/Run__004.png",
      "/images/hero/left-rotated/Run__005.png",
      "/images/hero/left-rotated/Run__006.png",
      "/images/hero/left-rotated/Run__007.png",
      "/images/hero/left-rotated/Run__008.png",
      "/images/hero/left-rotated/Run__009.png"
    );
  }

  jump() {
    console.log("JUMP");
    this.hero.velocity.y = -20;
  }

  // moveRight() {
  //   //create function to move to the right
  //   this.hero.position.x += 20;
  //   this.hero.changeAnimation("runningRight");
  //   //Stops the person from moving outside screen
  //   if (this.hero.position.x > 5900) {
  //     this.hero.position.x += 0;
  //   }
  //   if (this.hero.position.x < 20) {
  //     this.hero.position.x += 0;
  //   }
  // }

  moveRight() {
    //create function to move to the right
    this.hero.changeAnimation("runningRight");
    //Stops the person from moving outside screen
    if (this.hero.position.x < 5900) {
      this.hero.position.x += 20;
    }
  }

  moveLeft() {
    this.hero.changeAnimation("runningLeft");
    //Stops the person from moving outside screen
    if (this.hero.position.x > 100) {
      this.hero.position.x -= 20;
    }
  }

  intersects(other) {
    const distance = dist(
      this.hero.position.x,
      this.hero.position.y,
      other.x,
      other.y
    );
    if (distance + 50 < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }

  looseLife() {
    life = life - 1;
    displayLife.innerHTML = life;

    if (life === 0) {
      this.die(paperPoints, soapPoints);
    }
  }

  die(paperPoints, soapPoints) {
    noLoop();
    playAgain = `
    <div class="play-again-container">
    <p class="game-over"> Game over </p>
    <p>Covid19 got you.. But you collected </p>
    <div class="game-over-wrapper">
    <img src="./images/hero/Dead__009.png" alt="dead-character" class="dead-character"> 
    <div class="points-wrapper">
    <div class="total-points">
    <p class="points"> ${paperPoints}</p>
    <img src="./images/paper.png" alt="paper" class="points-img-end paper"> 
    </div>
    <div class="total-points">
    <p class="points"> ${soapPoints}</p>
    <img src="./images/soap.png" alt="soap" class="points-img-end">
    </div>
    </div>
    </div>
    <button class="play-again-btn">Try again</button>
    <div>`;

    reset.innerHTML = playAgain;
    playBtn = document.querySelector(".play-again-btn");

    playBtn.addEventListener("click", this.replay);
  }

  replay() {
    loop();
    const playContainer = document.querySelector(".play-again-container");
    playContainer.style.display = "none";
    life = 3;
    soapPoints = 0;
    paperPoints = 0;
    displayLife.innerHTML = life;

    displayPointsSoap.innerHTML = soapPoints;
    displayPointsPaper.innerHTML = paperPoints;
  }
}
