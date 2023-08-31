import express from "express";
import { UsersRouter } from "./routes/users.routes.js";
import { SessionsRouter } from "./routes/sessions.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());

app.listen(port,()=>console.log("Server is listening"));

//creamos una instancia del Router
const usersRouter = new UsersRouter();
const sessionsRouter = new SessionsRouter();

//routes
app.use("/api/users", usersRouter.getRouter());
app.use("/api/sessions", sessionsRouter.getRouter());