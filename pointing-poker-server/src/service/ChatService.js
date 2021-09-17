const MessageDB = require('../shemas/MessageShema')

class ChatService {

    async addMessage(msg){
        console.log('in service', msg)
        MessageDB.create(msg)
    }

    async getMessage(msgOrderId){
        if(!msgOrderId){
            throw new Error('no message ID')
        }
        const msg = await MessageDB.findById(msgOrderId)
        return msg
    }
    
    async deleteMessage(msgId){
        if(!msgId){
            throw new Error('no ID')
        }
        const delMsg = await MessageDB.findByIdAndDelete(msgId)
        return delMsg
    }
}

module.exports = new ChatService()