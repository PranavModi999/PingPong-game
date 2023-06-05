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

io.on("connection", (socket) => {
  console.log("a User Connected");
});
