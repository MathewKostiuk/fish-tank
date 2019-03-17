class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
    this.isTasty = false;
  }

  updateOneTick() {
    var delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S);
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.checkForFood();
  }

  checkForFood() {
    // console.log(this.position.x, this.position.y);

    for (let denizen in this.tank.denizens) {
      let fish = this.tank.denizens[denizen].isTasty ? this.tank.denizens[denizen] : false;
      if (fish && fish.id !== this.id) {
        let fishWithinSixX = (fish.position.x > this.position.x - 6) && (fish.position.x < this.position.x + 6);
        let fishWithinSixY = (fish.position.y > this.position.y - 6) && (fish.position.y < this.position.y + 6);
        if (fishWithinSixX && fishWithinSixY) {
          fish.kill();
        }
      }
    }
  }

  onClick(event) {
    console.log(this.tank.denizens);
  }
}
