const UserDB = require ('../shemas/UserShema')

class UserService {

    async setUser(userInfo){ 
        const result = await UserDB.create(userInfo)
        return result
    }

    async getUser(userId){
        if(!userId){
            throw new Error('no ID')
        }
        const user = await UserDB.findById(userId)
        return user.json()
    }
    
    async getAllUsers(gameId){
        const users = await UserDB.find({game_id: gameId})
        return users.json()
    }

    async deleteUser(userId){
        if(!userId){
            throw new Error('no ID')
        }
        await UserDB.findByIdAndDelete(userId, (err) => {
            if(err){
                return {res: 'Not Found User'}
            }
            else {
                return {res: 'User deleted'}
            } 
        }
        )
        
    }
}

module.exports = new UserService()