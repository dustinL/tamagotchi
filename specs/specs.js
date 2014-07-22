describe("Tamagotchi", function(){
  describe("initialize", function() {
    it ("sets the name and properties", function() {
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Fido");
      myPet.name.should.equal("Fido");
      myPet.foodLevel.should.equal(10);
      myPet.playLevel.should.equal(10);
      myPet.sleepLevel.should.equal(10);
    });
  });

  describe("timePasses", function(){
    it("decreases the foodLevel by 1", function(){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Fido");
      myPet.timePasses();
      myPet.foodLevel.should.equal(9);
      myPet.playLevel.should.equal(8);
      myPet.sleepLevel.should.equal(7);
    })
  })

  describe("isAlive", function() {
    it("is alive if all of the levels are above zero", function (){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Fido");
      myPet.isAlive().should.equal(true);
    })

    it("is dead if food level is 0", function (){
      var myPet = Object.create(Tamagotchi);
      myPet.initialize("Fido");
      myPet.foodLevel = 0;
      myPet.isAlive().should.equal(false);
    })
  })
});



