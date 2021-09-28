const ChatService = require( "../service/ChatService")

class MsgController {

    async setMessage(req, res){
        try {
        const  msg = req.body
        const newMsg = await ChatService.addMessage(msg)
        return res.status(200).json(newMsg)
        } catch (error) {
           return  res.status(500).json(error)
        }
    }

    async getMessage(req, res){
        try {
            const {msgId} = req.msgId
            const msg = await ChatService.getMessage(msgId)
            return res.status(200).json(msg)
        } catch (error) {
          return  res.status(500).json(error)
        }
            
    }

    async getAllMessages(req, res){
        try {
            const {gameId} = req.params
            const msgs = await ChatService.getAllMessages(gameId)
            return res.status(200).json(msgs)    
        } catch (error) {
            console.log('error', error)
            console.log('request', req.params)
            res.status(500).json(error)
        }
        
    }

    async deleteMessage(req, res){
        try {
           const {msgId} = req.params
           const result= await  ChatService.deleteMessage(msgId)
           return res.status(200).json(result)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = MsgController