class Paper {
  constructor() {
    this.r = 100;
    this.x = width;
    this.y = height - this.r;
  }

  move() {
    this.x -= 5;
  }
  show() {
    image(tImg, this.x, this.y, this.r, this.r);
  }

  remove() {
    console.log("move");
  }
}
