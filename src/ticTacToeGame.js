function Game(){
  this.player_1_Populations = []
  this.winCombinations
}


Game.prototype.getCurrentTurn = function(){
  return this.player_1;
};



Game.prototype.winCombinations = function(){
  this.winCombinations = [[1,2,3],[1,4,7],[1,5,9],[2,5,8],[3,6,9],[4,5,6],[7,8,9],[7,5,3]]
}

Game.prototype.player_1_Populations = function(){
  takes populated positions on baord bu onclick number.
}



// Game.prototype.changeCurrentTurn = function(){
//   if (this.player_1 === true)
//     return 
  
// }

// Game.prototype.turn 

//   if (turn === 0 ){
//     return Player_1
//     this.turn += 1
//   } else if (turn === 1){
//     return Player_2
//     this.turn -= 1 
//   }
// }