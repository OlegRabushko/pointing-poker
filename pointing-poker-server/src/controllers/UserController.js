const UserService = require( "../service/UserService")

class UserController {
    constructor(io, scoket){
        this.io = io
        this.scoket = scoket
    }

    setUser(req, res){
        try {
            UserService.setUser(req.body)
              .then((result) => res.status(200).json(result))
        } catch (error) {
            res.status(500).json(error)
        }
    }

    async getUser(req, res){
            const {userId} = req.params
            const user = await UserService.getUser(userId)
            return res.status(200).json(user)
    }

    async getAllUsers(req, res){
        try {
            const {gameId} = req.params
            const users = await UserService.getAllUsers(gameId)
            return res.status(200).json(users)    
        } catch (error) {
            res.status(500).json(error)
        }
    }

    deleteUser (req, res){
        try {
            const {userId} = req.params
            UserService.deleteUser(userId)
                .then((result) => res.status(200).json(result))
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = UserController