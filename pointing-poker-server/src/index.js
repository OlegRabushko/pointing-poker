const mongoose = require('mongoose')
const nanoid = require('nanoid')
const fileUpload = require('express-fileupload') 
const {route} = require('./router/router')
const {json} = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const MsgController  = require('./controllers/MsgController')

const PORT = Number(process.env.PORT) || 7001
const HOST = '0.0.0.0'
const DB_URL = 'mongodb+srv://user1:user1@clusterfornodejs.71bfz.mongodb.net/poining_poker?retryWrites=true&w=majority'
const app = express()
app.use(express.json())
app.use(json())
app.use(cors({
    origin:'http://localhost:8080'
}))
app.use('/api', route)
const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080'
    }
})


app.post('/api/start', (req, res) => {
    const diler = req.body.diler
    const gameId = req.body.gameId
    
})


try {
    io.on('connection', (socket) => {
        console.log('user connected with id msg from sever', socket.id)
    
        const msgController = new MsgController(io, socket)
        socket.on('send-msg', (msg) =>{
            
            io.emit('recieve-msg', msg)  
            msgController.setMessage(msg)
        } 
            )
    })    
} catch (error) {
    console.log(error)
}

try {
    server.listen(PORT, async () => {
        console.log(`server is started on ${PORT}`)
        await mongoose.connect(DB_URL,{useUnifiedTopology: true ,useNewUrlParser: true})
    })
} catch (error) {
    console.log(error)
}
