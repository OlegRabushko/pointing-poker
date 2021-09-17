const UserDB = require ('../shemas/UserShema')

class UserService {

    async setUser(userInfo){
        console.log('in service', userInfo)
        UserDB.create(userInfo)
    }

    async getUser(userId){
        if(!userId){
            throw new Error('no ID')
        }
        const user = await UserDB.findById(userId)
        return user.json()
    }
    
    async getUsers(){
        const users = await UserDB.find()
        return users.json()
    }

    async deleteUser(userId){
        if(!userId){
            throw new Error('no ID')
        }
        const delUser = await UserDB.findByIdAndDelete(userId)
        return delUser
    }
}

module.exports = new UserService()