const GameDB = require('../shemas/GameShema')

class GameService {
   async setNewGame(gameIdx){
    await GameDB.create({game_index: gameIdx})
        .then(game => 
            {console.log('in game service', game),
                game.toJson()
            }
            )
    }

    updateGame(){

    }

}

module.exports = new GameService()