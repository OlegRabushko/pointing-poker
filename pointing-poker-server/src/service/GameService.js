const GameDB = require('../shemas/GameShema')

class GameService {
   async setNewGame(gameIdx){
      const newGame = await GameDB.create({game_index: gameIdx})
      return newGame       
    }

    async updateGameUsers(gameId, userId){
      const updateGame = await GameDB.updateOne(
         {_id: gameId},
         {$push: {users: userId}}
      );
      return updateGame
    }

}

module.exports = new GameService()