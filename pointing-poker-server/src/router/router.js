const {Router} = require('express')
const MsgController = require('../controllers/MsgController')
const UserController = require('../controllers/UserController')
const route = Router()
const msgController = new MsgController()
const userController = new UserController()

route.get('/messages/:gameId', msgController.getAllMessages)
route.delete('/messages/:msgId', msgController.deleteMessage)
route.get('/users/:userId', userController.getUser)
route.get('/users/:gameId', userController.getAllUsers)
route.post('/users', userController.setUser)
route.delete('/users/:userId', userController.deleteUser)

module.exports = {route}