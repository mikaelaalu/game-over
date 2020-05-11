class Virus {
  constructor() {
    this.r = 40;
    this.x = width;
    this.y = Math.floor(Math.random() * 600) + 1 || height - this.r;
    this.speed = 2;
  }

  move() {
    this.x -= this.speed;
  }

  show() {
    image(virusImg, this.x, this.y, this.r, this.r);
  }

  displayRandom(array) {
    for (let i = 0; i < array.length; i++) {
      const single = array[i];
      single.move();
      single.show();

      if (person.intersects(single)) {
        array.splice(i, 1);
        person.life();
      }
    }
  }
}
