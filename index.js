const httpServer = require("http").createServer();
const port = 8080;
const io = require("socket.io")(httpServer, {
	allowEIO3: true,
	cors: {
		origin: "http://localhost:3000",
		methods: ["GET", "POST"],
		credentials: true,
	},
});
httpServer.listen(port, function () {
	console.log("Listening on port: " + port);
});
io.on("connection", function (socket) {
	console.log(`client ${socket.id} has connected`);
});

io.on("connection", function (socket) {
	socket.on("newInscricao", function (response) {
		socket.broadcast.emit("newInscricao", response);
	});
});
