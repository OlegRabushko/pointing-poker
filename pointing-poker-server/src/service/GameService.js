const GameDB = require('../shemas/GameShema')

class GameService {
   async setNewGame(gameIdx){
      const newGame = await GameDB.create({game_index: gameIdx})
      return newGame       
    }

    updateGame(){

    }

}

module.exports = new GameService()