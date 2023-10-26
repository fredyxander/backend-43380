import express from "express";
import {config} from "./config/config.js";
import { connectDB } from "./config/dbConnection.js";
import { engine } from 'express-handlebars';
import path from "path";
import {__dirname} from "./utils.js";
import { Server } from "socket.io";
import { chatModel } from "./dao/models/chat.model.js";

import passport from "passport";
import session from "express-session";
import { initializePassport } from "./config/passport.config.js";
import MongoStore from "connect-mongo";

import { productsRouter } from "./routes/products.routes.js";
import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";
import { sessionsRouter } from "./routes/sessions.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

//servidor de express
const httpServer = app.listen(port,()=>console.log(`Server listening on port ${port}`));

//conexión a la base de datos
connectDB();

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//configuracion de session
app.use(session({
    store:MongoStore.create({
        mongoUrl:config.mongo.url
    }),
    secret:config.server.secretSession,
    resave:true,
    saveUninitialized:true
}));

//configuracion de passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use(viewsRouter);
app.use("/api/products", productsRouter);
app.use("/api/carts", cartsRouter);
app.use("/api/sessions", sessionsRouter);
app.use("/api/users", usersRouter);

//servidor de websocket
const io = new Server(httpServer);
//socket server
io.on("connection",(socket)=>{
    console.log("nuevo cliente conectado");

    socket.on("authenticated",async(msg)=>{
        const messages = await chatModel.find();
        socket.emit("messageHistory", messages);
        socket.broadcast.emit("newUser", msg);
    });

    //recibir el mensaje del cliente
    socket.on("message",async(data)=>{
        console.log("data", data);
        const messageCreated = await chatModel.create(data);
        const messages = await chatModel.find();
        //cada vez que recibamos este mensaje, enviamos todos los mensajes actualizados a todos los clientes conectados
        io.emit("messageHistory", messages);
    })
});