let points = 0;
let displayPointsSoap = document.querySelector(".soap");
let displayPointsPaper = document.querySelector(".paper");
let paperPoints = 0;
let soapPoints = 0;

class Item {
  constructor(image, radius, speed, displayHeight, type) {
    this.r = radius;
    this.x = hero.hero.position.x + 1000;
    this.y = displayHeight || height - this.r;
    this.image = image;
    this.speed = speed;
    this.type = type;

    displayPointsSoap.innerHTML = soapPoints;
    displayPointsPaper.innerHTML = paperPoints;
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

      if (hero.intersects(single)) {
        array.splice(i, 1);

        this.points(single.type);
      }
    }
  }

  points(item) {
    if (item == "soap") {
      displayPointsSoap.innerHTML = soapPoints++;
    }
    if (item == "paper") {
      displayPointsPaper.innerHTML = paperPoints++;
    }
  }
}
