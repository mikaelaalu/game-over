class Virus {
  constructor() {
    this.r = radius;
    this.x = width;
    this.y = displayHeight || height - this.r;
    this.image = image;
    this.speed = speed;

    displayPoints.innerHTML = points;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(this.image, this.x, this.y, this.r, this.r);
  }
}
