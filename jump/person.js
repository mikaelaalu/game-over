let life = 3;
let displayLife = document.querySelector(".life");
let playAgain;
let playBtn;

const reset = document.querySelector(".reset");

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
  }
  moveLeft() {
    //create function to move to the left
    this.x -= this.vx;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    image(avatarImg, this.x, this.y, this.r, this.r);
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
    console.log(life);

    if (life === 2) {
      this.die(points);
    }
  }

  die(points) {
    playAgain = `
    <div class="play-again-container">
    <div class="play-again">
    <p>You got ${points} points</p>
    <button class="play-again-btn">Try again</button>
    </div>
    <div>`;

    reset.innerHTML = playAgain;
    playBtn = document.querySelector(".play-again-btn");

    playBtn.addEventListener("click", this.replay);
  }

  replay() {
    const playContainer = document.querySelector(".play-again-container");
    playContainer.style.display = "none";
    life = 3;
    points = 0;

    displayLife.innerHTML = life;
    displayPoints.innerHTML = points;
  }
}
