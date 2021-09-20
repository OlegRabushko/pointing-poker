const GameDB = require('../shemas/GameShema')

class GameService {
    setNewGame(gameId, diler){
        GameDB.create({
            game_index: gameId,
            users: []
        })
    }

}

module.exports = new GameService()