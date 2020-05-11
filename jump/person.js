class Person {
  constructor() {
    this.r = 100;
    this.x = 50;
    this.vx = 10;
    this.y = height - this.r;
    this.vy = 0; //snabbhet y-axel
    this.gravity = 1;
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
}
