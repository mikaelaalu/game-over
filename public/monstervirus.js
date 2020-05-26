class MonsterVirus {
  constructor() {
    this.monsterVirus = createSprite(1400, -650, 100, 300);
    this.monsterVirus.addAnimation("normal", "/images/coronavirus.png");
    this.monsterVirus.scale = 0.5;
  }

  showMonsterVirus() {
    if (millis() > 20000) {
      this.monsterVirus.attractionPoint(
        0.01,
        hero.hero.position.x,
        hero.hero.position.y
      );
    } else if (millis() > 50000) {
      this.monsterVirus.attractionPoint(
        0.2,
        hero.hero.position.x,
        hero.hero.position.y
      );
    }
  }
}
