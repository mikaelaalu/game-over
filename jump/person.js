let displayLife = document.querySelector(".life");
const reset = document.querySelector(".reset");
let life = 3;
let playAgain;
let playBtn;

class Person {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.vx = 10;
    this.y = height - this.r;
    this.vy = 0; //snabbhet y-axel
    this.gravity = 1;

    displayLife.innerHTML = life;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -32;
    }
  }

  moveRight() {
    //create function to move to the right
    this.x += this.vx;
    hero = runRightImages[frameCount % spritePaths.length];

    //Stops the person from moving outside screen
    if (this.x > 5900) {
      this.vx = 0;
    }
    if (this.x < 20) {
      this.vx = 10;
    }
  }
  moveLeft() {
    //Stops the person from moving outside screen
    if (this.x > 5900) {
      this.vx = 10;
    }

    if (this.x < 20) {
      this.vx = 0;
    }

    this.x -= this.vx;
    hero = runLeftImages[frameCount % spritePaths.length];
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(hero, this.x, this.y, this.r, this.r);
  }

  intersects(other) {
    const distance = dist(this.x, this.y, other.x, other.y);

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
