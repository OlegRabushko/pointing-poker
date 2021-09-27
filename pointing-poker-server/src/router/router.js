const {Router} = require('express')
const MsgController = require('../controllers/MsgController')
const UserController = require('../controllers/UserController')
const route = Router()

route.get('/messages/:gameId', new MsgController().getAllMessages)
route.delete('/messages/:msgId', new MsgController().deleteMessage)
route.get('/users/:userId', new UserController().getUser)
route.get('/users/:gameId', new UserController().getAllUsers)
route.post('/users', new UserController().setUser)
route.delete('/users/:userId', new UserController().deleteUser)

module.exports = {route}