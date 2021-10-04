const mongoose = require('mongoose')
const fileUpload = require('express-fileupload') 
const {route} = require('./router/router')
const {json} = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const GameService = require('./service/GameService')
const startSocket = require('./service/SocketService')


const PORT = Number(process.env.PORT) || 7001;
const DB_URL =
    'mongodb+srv://user1:user1@clusterfornodejs.71bfz.mongodb.net/poining_poker?retryWrites=true&w=majority';

const app = express();
const server = http.createServer(app);

app.use(express.json({ limit: '5mb' }));
app.use(cors({
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}))
app.use(
    express.urlencoded({ limit: '5mb', extended: true, parameterLimit: 5000 })
);
app.use(json());
app.use('/api', route);

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:8080',
    },
});

app.post('/api/start', (req, res) => {
    const { gameTitle } = req.body
    GameService.setNewGame(gameTitle)
        .then((newGame) => { res.send(newGame) })
})

try {
    server.listen(PORT, async () => {
        console.log(`server is started on ${PORT}`);
        await mongoose.connect(DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
    });
} catch (error) {
    console.log(error);
}

startSocket(io)