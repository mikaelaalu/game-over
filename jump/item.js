class Item {
  constructor(image, radius, speed, displayHeight) {
    this.r = radius;
    this.x = width;
    this.y = displayHeight || height - this.r;
    this.image = image;
    this.speed = speed;
  }

  move() {
    this.x -= this.speed;
  }
  show() {
    image(this.image, this.x, this.y, this.r, this.r);
  }

  displayRandom(array) {
    for (let i = 0; i < array.length; i++) {
      const single = array[i];
      single.move();
      single.show();

      if (person.intersects(single)) {
        array.splice(i, 1);
      }
    }
  }
}
