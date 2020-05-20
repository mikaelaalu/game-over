class Fella {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.vx = 10;
    this.y = height - this.r;
    this.vy = 0; //snabbhet y-axel
    this.gravity = 1;
    createSprite(this.x, this.y, 50, 100);
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -32;
    }
  }

  moveRight() {
    console.log("Move right");
    //create function to move to the right

    this.x += 20;
  }
  moveLeft() {
    console.log("Move left");
    //create function to move to the left
    this.x -= this.vx;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }
}
