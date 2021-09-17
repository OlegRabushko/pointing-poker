const ChatService = require( "../service/ChatService")

module.exports = class MsgController {
    constructor(io, scoket){
        this.io = io
        this.scoket = scoket
    }

    async setMessage(msg){
        try {
            await ChatService.addMessage(msg)
            
        } catch (error) {
            
        }
         
    }

    async getMessage(msgOrderId){
            const msg = await ChatService.getMessage(msgOrderId)
            return msg
    }
}
