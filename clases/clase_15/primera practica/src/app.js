import express from "express";
import {config} from "./config/config.js";
import { connectDB } from "./config/dbConnection.js";
import { engine } from 'express-handlebars';
import path from "path";
import {__dirname} from "./utils.js";
import { Server } from "socket.io";
import { chatModel } from "./dao/models/chat.model.js";

import { productsRouter } from "./routes/products.routes.js";
// import { cartsRouter } from "./routes/carts.routes.js";
import { viewsRouter } from "./routes/views.routes.js";

const port = config.server.port;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

//servidor de express
const httpServer = app.listen(port,()=>console.log(`Server listening on port ${port}`));

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

//conexión a la base de datos
connectDB();

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewsRouter);
app.use("/api/products", productsRouter);
// app.use("/api/carts", cartsRouter);