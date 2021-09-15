const fileUpload = require('express-fileupload') 
const router = require('./router')
const {json} = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const MsgController  = require('./handlers/MsgController')

const PORT = Number(process.env.PORT) || 7001
const HOST = '0.0.0.0'
const DB_URL = 'mongodb+srv://user1:user1@clusterfornodejs.71bfz.mongodb.net/poining_poker?retryWrites=true&w=majority'
const app = express()
const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080'
    }
})

io.on('connection', (socket) => {
    console.log('user connected with id', socket.id)

    const msgController = new MsgController(io, socket)
    socket.on('send-msg', msg => msgController.setMessage(msg))
})

server.listen(PORT,() => {
    console.log(`server is started on ${PORT}`)
})