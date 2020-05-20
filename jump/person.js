let life = 3;
let displayLife = document.querySelector(".life");
let playAgain;
let playBtn;
const reset = document.querySelector(".reset");
console.log("HEJ!");

class Hero {
  constructor() {
    this.hero = createSprite(200, 100, 100, 100);

    this.r = 100;
    this.xx = 50;
    this.vx = 10;
    this.yy = window.innerHeight - this.r;
    this.vy = 0; //snabbhet y-axel
    console.log(this.hero);
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

  // hero.addAnimation("normal", "images/hero/Run__000.png");

  // hero.scale = 0.5;

  // hero.setCollider("rectangle", 0, 26, 200, 300);

  // hero.velocity.y += gravity;

  //  moveRight() {
  //     hero.position.x += this.vx;
  //     // hero = runRightImages[frameCount % spritePaths.length];
  //   }
  //   moveLeft() {
  //     //create function to move to the left
  //     hero.position.x -= this.vx;
  //     // hero = runLeftImages[frameCount % spritePaths.length];
  //   }
}

// class Person {
//   constructor() {
//     // this.r = 100;
//     // this.xx = 50;
//     // this.vx = 10;
//     // this.yy = window.innerHeight - this.r;
//     // this.vy = 0; //snabbhet y-axel

//     this.ground = window.innerHeight - 220;

//     hero = createSprite(200, this.yy, 200, 200);
//     hero.addAnimation("normal", "images/hero/Run__000.png");

//     hero.scale = 0.5;

//     hero.setCollider("rectangle", 0, 26, 200, 300);

//     hero.velocity.y += gravity;

//     displayLife.innerHTML = life;
//   }

//   jump() {
//     console.log("JUMP!");
//     // this.vy = -22;
//     hero.velocity.y = -20;

//     // if (hero.position.y > 600) {
//     //   hero.velocity.y = 22;
//     // }
//   }

//   moveRight() {
//     hero.position.x += this.vx;
//     // hero = runRightImages[frameCount % spritePaths.length];
//   }
//   moveLeft() {
//     //create function to move to the left
//     hero.position.x -= this.vx;
//     // hero = runLeftImages[frameCount % spritePaths.length];
//   }

//   move() {
//     // this.yy += this.vy;
//     // this.vy += this.gravity;
//     // hero.position.y = constrain(this.yy, 0, 300);
//     // hero.position.y = this.ground;
//     if (hero.position.y >= windowHeight - 200) {
//       hero.velocity.y = 0;
//     }
//   }

//   // show() {
//   //   image(hero, this.xx, this.yy, this.r, this.r);
//   // }

//   intersects(other) {
//     const distance = dist(this.xx, this.yy, other.x, other.y);

//     if (distance + 50 < this.r + other.r) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   looseLife() {
//     life = life - 1;
//     displayLife.innerHTML = life;

//     if (life === 0) {
//       this.die(points);
//     }
//   }

//   die(points) {
//     playAgain = `
//     <div class="play-again-container">
//     <div class="play-again">
//     <p>You got ${points} points</p>
//     <button class="play-again-btn">Try again</button>
//     </div>
//     <div>`;

//     reset.innerHTML = playAgain;
//     playBtn = document.querySelector(".play-again-btn");

//     playBtn.addEventListener("click", this.replay);
//   }

//   replay() {
//     const playContainer = document.querySelector(".play-again-container");
//     playContainer.style.display = "none";
//     life = 3;
//     points = 0;

//     displayLife.innerHTML = life;
//     displayPoints.innerHTML = points;
//   }
// }
