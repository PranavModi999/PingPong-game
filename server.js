const server = require("http").createServer();
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
const PORT = 3000;

server.listen(PORT, () => {
  console.log(`\x1b[32mlistening on port ${PORT}...\x1b[0m`);
});

let readyPlayerCount = 0;

io.on("connection", (socket) => {
  console.log("a User Connected", socket.id);

  socket.on("ready", () => {
    console.log("player ready ", socket.id);
    readyPlayerCount++;
    if (readyPlayerCount === 2) {
      console.log("Starting the game");
      io.emit("startGame", socket.id);
    }
  });
});
