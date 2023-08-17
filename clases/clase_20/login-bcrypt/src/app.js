import express from "express";
import { config } from "./config/config.js";
import { engine } from 'express-handlebars';
import path from "path";
import { __dirname } from "./utils.js";
import session from "express-session";
import MongoStore from "connect-mongo";

import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";

const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log("Server ok"));

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//configuracion de sesiones
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

//routes
app.use(viewsRouter);
app.use("/api/sessions", sessionsRouter);