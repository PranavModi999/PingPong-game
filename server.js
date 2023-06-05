const http = require("http");
const io = require("socket.io");

const apiServer = require("./api");

const httpServer = http.createServer(apiServer);
const socketServer = io(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const socket = require("./sockets");

const PORT = 3000;
httpServer.listen(PORT, () => {
  console.log(`\x1b[32mlistening on port ${PORT}...\x1b[0m`);
});

socket.listen(socketServer);
