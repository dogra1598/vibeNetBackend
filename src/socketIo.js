import { Server } from "socket.io";

const socketIo = (server) => {
  const io = new Server(server);
  io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("temp", (data) => {
      console.log(data);
    });
  });
};

export { socketIo };
