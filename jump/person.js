class Person {
  constructor() {
    this.r = 150;
    this.x = 400;
    this.y = height - this.r;
    this.vy = 0; //snabbhet y-axel
    this.gravity = 1;
  }

  jump() {
    if (this.y == height - this.r) {
      this.vy = -30;
    }
    //hgastigehetn på hoppet
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    //creates unicorn
    image(uImg, this.x, this.y, this.r, this.r);
  }

  intersects(other) {
    const distance = dist(this.x, this.y, other.x, other.y);

    if (distance < this.r + other.r) {
      return true;
    } else {
      return false;
    }
  }
}
