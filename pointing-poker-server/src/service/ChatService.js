const Message = require('../shemas/MessageShema')

class ChatService {

    async addMessage(msg){
        await Message.create(msg)
    }

    async getMessage(msgId){
        if(!msgId){
            throw new Error('no ID')
        }
        const msg = await Message.findById(msgId)
        return msg
    } 
}

module.exports = ChatService