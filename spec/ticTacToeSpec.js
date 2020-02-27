describe ('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });
  it('it return player_1 as true', function(){
    expect(game.getCurrentTurn()).toEqual(true)
  })
})






// 'use strict';
// describe ('playersMark', function() {
//   var player;

//   beforeEach(function(){
//     player = new playersMark();
//   });
//   it('returns player choice ', function() {
//     expect(player.getCurrentMark()).toEqual("X")
//   });










// // 'use strict';
// describe ('Thermostate', function() {
//   var thermostat;

//   beforeEach(function(){
//     thermostat = new Thermostat();
//   });
//   it('it returns temperature (20)', function() {
//     expect(thermostat.getCurrentTemperature()).toEqual(20)
//   });
//   it('increases temperature by (1)', function() {
//     thermostat.up()
//     expect(thermostat.getCurrentTemperature()).toEqual(21)
//   });
//   it('decreases temperature by (1)', function() {
//     thermostat.down()
//     expect(thermostat.getCurrentTemperature()).toEqual(19)
//   });
//   it('minimum temperature is (10)', function() {
//     for (var i=0; i<11; i++) {
//       thermostat.down()
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(10)
//   });
//   it('test that powerSaveOn return true', function(){
//     expect(thermostat.powerSaveMode).toEqual(true);
//     thermostat.powerSaveSwitch();
//     expect(thermostat.powerSaveMode).toEqual(false);
//   })
//   it('if powerSaveMode[true] max temp(25) or powerSaveMode[false] min temp(32)', function(){
//     for (var i=0; i<25; i++) {
//       thermostat.up()
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(25);
//     thermostat.powerSaveSwitch();
//     for (var i=0; i<25; i++) {
//       thermostat.up()
//     }
//     expect(thermostat.getCurrentTemperature()).toEqual(32);  
//   })
//   it('when temperature is reset thermostat shows 20', function() {
//     for (var i=0; i<25; i++) {
//       thermostat.up()
//     }
//     thermostat.resetTemp()
//     expect(thermostat.getCurrentTemperature()).toEqual(20);
//   });
//   it('if temperature is 17 or lower, energy usage equals low-usage', function () {
//     for (var i=0; i<10; i++) {
//       thermostat.down()
//     }
//     thermostat.energyUsage()
//     expect(thermostat.usage).toEqual("low-usage")
//   });
//   it('if temperature is between 18-25, energy usage equals mid-usage', function () {
//     expect(thermostat.usage).toEqual("mid-usage")
//   });
//   it('if temperature is higher than 25, energy usage equals high-usage', function () {
//     thermostat.powerSaveSwitch()
//     for (var i=0; i<30; i++) {
//       thermostat.up()
//     }           
//     thermostat.energyUsage()


//     expect(thermostat.usage).toEqual("high-usage")
//   });

//   // it('when power save mode is [on] maximum temp is (25)', function(){
//   //   thermostat.power_save = true
//   //   for (var i=0; i<30; i++) {
//   //     thermostat.up()
//   //   }
//   //   expect(thermostat.getCurrentTemperature()).toEqual(25)
//   // });
// });


// function Thermostat(){
//   this.temperature = 20;
//   this.powerSaveMode = true;
//   this.usage = "mid-usage";
// };

// Thermostat.prototype.getCurrentTemperature = function() {
//   return this.temperature;
// };

// Thermostat.prototype.up = function() {
//   if (this.powerSaveMode === true && this.temperature === 25){
//     return this.temperature;
//   }
//   else if (this.powerSaveMode === false && this.temperature === 32){
//     return this.temperature;
//   }
//   else {
//     return this.temperature += 1
//   }
  
// };

// Thermostat.prototype.down = function() {
//   if (this.temperature === 10) {
//     return this.temperature
//   } else {
//     return this.temperature -= 1;
//   }
// };

// Thermostat.prototype.powerSaveSwitch = function() {
//   this.powerSaveMode = !this.powerSaveMode
// };

// Thermostat.prototype.resetTemp = function() {
//   return this.temperature = 20;
// };

// Thermostat.prototype.energyUsage = function() {

//   if (this.temperature < 18){
//     this.usage = 'low-usage';
//   } 
//   else if (this.temperature > 17 && this.temperature < 25){
//     this.usage = 'mid-usage';
//   }
//   else {
//     this.usage = 'high-usage';
//   }
// };



//   // if (this.power_save === true)
//   //   if (this.temperature === 25){
//   //     reutrn this.temperature
//   //   }
//   //   else if {this.temperature < 25
//   //     return this.temperature += 1;
//   //   }
//   // else if (this.power_save === false)
//   //   if (this.temperature === 32){
//   //     return this.temperature
//   //   }
//   //   else {
//   //     return this.temperature += 1;
//   //   }
// // function Thermostat(temp) = {
// //   this.temperature = temp;
// // };

// // Thermostat.prototype.show = function(){
// //   return this.temperature;
// // };

// // var test_thermo = new Thermostat(20);

// // test_thermo.temp();
// // Thermostat.prototype.temperature = function(){
// //   reutrn this.temperature;
// // };