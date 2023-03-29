const httpServer = require('http').createServer()
const io = require("socket.io")(httpServer, {
    allowEIO3: true,
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
})
httpServer.listen(8080, function () {
    console.log('listening on *:8080')
})
io.on('connection', function (socket) {
    console.log(`client ${socket.id} has connected`)
})

io.on('connection', function (socket) {
    socket.on('newInscricao', function (response) {
        socket.broadcast.emit('newInscricao', response)
    })
})