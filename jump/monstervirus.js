class MonsterVirus {
  constructor() {
    this.monsterVirus = createSprite(1400, -650, 100, 300);
    this.monsterVirus.addAnimation("normal", "/images/coronavirus.png");
    this.monsterVirus.scale = 0.5;
  }

  // movingAround() {
  //   if (this.prepper.position.x == 1600) {
  //     this.prepper.velocity.x = -5;
  //   } else if (this.prepper.position.x == 1200) {
  //     this.prepper.velocity.x = 5;
  //   } else {
  //     this.prepper.velocity.x = 5;
  //   }
  // }
}
