import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "node:http";

import { socketIo } from "./socketIo.js";

const app = express();
const server = createServer(app);

socketIo(server);
// const io = new Server(server);
// io.on("connection", (socket) => {
//   console.log("user connected");
// });

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(
  express.json({
    limit: "16kb",
  })
);
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

export { server };
