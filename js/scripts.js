var Tamagotchi = {
  initialize: function (name) {
    this.name = name;
    this.foodLevel = 10;
    this.playLevel = 10;
    this.sleepLevel = 10;
  },
  timePasses: function () {
    this.foodLevel = this.foodLevel - 1;
    this.playLevel = this.playLevel - 2;
    this.sleepLevel = this.sleepLevel - 3;
  },
  isAlive: function () {
    if (this.foodLevel === 0 || this.playLevel === 0 || this.sleepLevel === 0) {
      return false;
    } else {
      return true;
    }
  }
}


// var countdown = window.setInterval(myPet.timePasses(), 2000);
