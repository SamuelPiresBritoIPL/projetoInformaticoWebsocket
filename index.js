const httpServer = require("http").createServer();

//Localmente
const port = 8080;
const originIP = "http://localhost:";
//for Carolina
//const originIP = "http://127.0.0.1:";
//Old Version
// const originPort = 3000;
const originPort = 5173;

/*
//Servidor
const port = 8081;
const originIP = "http://localhost:";
const originPort = 80;
*/
const io = require("socket.io")(httpServer, {
	allowEIO3: true,
	cors: {
		origin: originIP + originPort,
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

/*
io.on("connection", function (socket) {
	socket.on("novasVagas", function (response) {
		socket.broadcast.emit("novasVagas", response);
	});
});
*/
