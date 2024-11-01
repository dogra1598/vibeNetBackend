import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { createServer } from "node:http";

import { socketIo } from "./socketIo.js";
import authRouter from "./routes/authRoutes.js";

const app = express();
const server = createServer(app);

socketIo(server);

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

app.use("/auth", authRouter);

export { server };
