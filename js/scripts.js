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
    this.sleepLevel = this.sleepLevel - 2;
  },
  isAlive: function () {
    if (this.foodLevel <= 0 || this.playLevel <= 0 || this.sleepLevel <= 0) {
      return false;
    } else {
      return true;
    }
  },
  foodUp: function() {
    this.foodLevel = this.foodLevel + 1
  },
  playUp: function() {
    this.playLevel = this.playLevel + 1
  },
  sleepUp: function() {
    this.sleepLevel = this.sleepLevel + 1
  }
}

var tamagotchi;


$(document).ready(function() {
  $("#start-button").click(function() {
    $("#start-button").hide();
    tamagotchi = Object.create(Tamagotchi);
    tamagotchi.initialize(prompt("Name your Tamagotchi"));

    var countdown = setInterval(function() {

        tamagotchi.timePasses();
        $("span#food-level").text(tamagotchi.foodLevel);
        $("span#play-level").text(tamagotchi.playLevel);
        $("span#sleep-level").text(tamagotchi.sleepLevel);
        if (!tamagotchi.isAlive()) {
          alert(tamagotchi.name + " is dead!");
          clearInterval(countdown);
          $("#start-button").show();}
      }, 1000)
    })
  $("#food-button").click(function() {
    tamagotchi.foodUp();
    $("span#food-level").text(tamagotchi.foodLevel);
  })
  $("#play-button").click(function() {
    tamagotchi.playUp();
    $("span#play-level").text(tamagotchi.playLevel);
  })
  $("#sleep-button").click(function() {
    tamagotchi.sleepUp();
    $("span#sleep-level").text(tamagotchi.sleepLevel);
  })
  })


