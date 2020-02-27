function Game(){
  this.player_1 = true
}


Game.prototype.getCurrentTurn = function(){
  return this.player_1;
};

// Game.prototype.turn 

//   if (turn === 0 ){
//     return Player_1
//     this.turn += 1
//   } else if (turn === 1){
//     return Player_2
//     this.turn -= 1 
//   }
// }