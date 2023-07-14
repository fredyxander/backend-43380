import express from "express";
import {engine} from "express-handlebars";
import {__dirname} from "./utils.js";
import path from "path";
import {Server} from "socket.io";

import { viewsRouter } from "./routes/views.routes.js";

const port = 8080;
const app = express();

//guardar el servidor http en una variable
const httpServer = app.listen(port,()=>console.log(`Server ok`));

//midlewares
app.use(express.static(path.join(__dirname,"/public")));

//configuracion de handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//crear el servidor de websocket
const socketServer = new Server(httpServer);

let messages = [];
//crear el canal de comunicacion,detectar el socket del cliente
socketServer.on("connection",(socketConnected)=>{
    console.log(`Nuevo cliente conectado ${socketConnected.id}`);

    //capturar la informacion del cliente
    socketConnected.on("messageKey",async(data)=>{
        console.log(data);
        messages.push({userId:socketConnected.id,message:data});

        //enviar todos los mensajes a todos los clientes
        socketServer.emit("msgHistory",messages);
    });
});

//routes
app.use(viewsRouter);