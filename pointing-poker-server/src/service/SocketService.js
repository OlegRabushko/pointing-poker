const UserService = require('./UserService')
const ChatService = require('./ChatService')
const IssueService = require('./IssueService')

const startSocket = (io) => {
    try {
        io.on('connection', (socket) => {
            socket.on('join-game', async (roomId, user) => {
                socket.join(roomId)
                const users = await UserService.getAllUsers(roomId)
                const issues = await IssueService.getAllIssues(roomId)
                io.to(socket.id).emit('get-prev-data', users, issues)
                socket.to(roomId).emit('joined', user)
            })
    
            socket.on('send-msg', (msg) => {
                console.log('msg sent', msg)
                io.in(msg.game_id).emit('recieve-msg', msg)
                ChatService.addMessage(msg)
            })
            
            socket.on('add-issue', (game_id, issue) => {
                io.in(game_id).emit('issue-to-all', issue)
            })
            socket.on('issue-updated-send',(updateIssue) => {
                io.in(updateIssue.game_id).emit('issue-updated-get',updateIssue)
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
            socket.on('curr-issue', (issueId, gameId) => {
                io.in(gameId).emit('received-curr-issue', issueId)
            })
            socket.on('results', (CardsArr, elemIndex, id) => {
                io.in(id).emit('received-results', CardsArr, elemIndex)
            })
            socket.on('card', (cardID, id) => {
                io.in(id).emit('received-card', cardID)
            })
            socket.on('user-deleted-send', (deletedUser) => {
                console.log(deletedUser)
                io.in(deletedUser.game_id).emit('user-deleted-get', deletedUser._id)
            })
            socket.on('issue-deleted-send', (deletedIssue) => {
                io.in(deletedIssue.game_id).emit('issue-deleted-get', deletedIssue._id)
            })
        })
    } catch (error) {
        console.log(error);
    }
}

module.exports = startSocket