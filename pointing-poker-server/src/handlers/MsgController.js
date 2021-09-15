const ChatService = require( "../service/ChatService")

module.exports = class MsgController {
    constructor(io, scoket){
        this.io = io
        this.scoket = scoket
    }

    async setMessage(msg){
        await ChatService.addMessage(msg)
        this.getMessage(msg.order_id)
    }

    async getMessage(msgId){
            const msg = await ChatService.getMessage(msgId)
            return msg
    }
}
