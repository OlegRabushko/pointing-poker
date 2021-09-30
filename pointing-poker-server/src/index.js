const mongoose = require('mongoose');
const nanoid = require('nanoid');
const fileUpload = require('express-fileupload');
const { route } = require('./router/router');
const { json } = require('body-parser');
const express = require('express');
const cors = require('cors');
const http = require('http');
const MsgController = require('./controllers/MsgController');
const GameService = require('./service/GameService');
const UserService = require('./service/UserService');

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
    const { gameIndex } = req.body
    GameService.setNewGame(gameIndex)
        .then((newGame) => { res.send(newGame) })
})


try {
    io.on('connection', (socket) => {
        socket.on('join-game', async (roomId) => {
            console.log('socket server user join', roomId),
                socket.join(roomId)
            const users = await UserService.getAllUsers(roomId)
            console.log('all users from server', users)
            io.in(roomId).emit('joined', users, socket.id)
        })

        const msgController = new MsgController(io, socket)
        socket.on('send-msg', (msg) => {
            console.log('msg sent', msg)
            io.in(msg.game_id).emit('recieve-msg', msg)
            msgController.setMessage(msg)
        })

        socket.on('game-settings', (settings, id) => {
            io.in(id).emit('received-settings', settings)
        })
        socket.on('set-timer', (time, id) => {
            io.in(id).emit('received-timer', time)
        })
        socket.on('set-issues', (issues, id) => {
            io.in(id).emit('received-issues', issues)
        })
        socket.on('relocate-result-page', (id) => {
            io.in(id).emit('received-relocate-result-page')
        })
        socket.on('round', (id) => {
            io.in(id).emit('received-round')
        })
        socket.on('restart-round', (issueCards, id) => {
            io.in(id).emit('received-restart-round', issueCards)
        })
        socket.on('next-issue', (CardsArr, issueCards, elemIndex, id) => {
            io.in(id).emit('received-next-issue', CardsArr, issueCards, elemIndex)
        })
        socket.on('results', (CardsArr, issueCards, elemIndex, id) => {
            io.in(id).emit('received-results', CardsArr, issueCards, elemIndex)
        })
        socket.on('card', (cardID, id) => {
            io.in(id).emit('received-card', cardID)
        })
        socket.on('card-deleted', (cardID, id) => {
            io.in(id).emit('received-card-deleted', cardID)
        })
    })
} catch (error) {
    console.log(error);
}

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
