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

//crear el canal de comunicacion,detectar el socket del cliente
socketServer.on("connection",(socketConnected)=>{
    console.log(`Nuevo cliente conectado ${socketConnected.id}`);

    //recibir eventos del socket del cliente conectado
    socketConnected.on("messageEvent",(data)=>{
        console.log(`datos recibidos del cliente: ${data}`);
    });

    setTimeout(()=>{
        //enviar datos del socket servidor al socket cliente
        socketConnected.emit("eventoIndivual",`Bienvenido ${socketConnected.id}`);

        //enviar datos a todos los clientes conectados, menos al cliente actual
        socketConnected.broadcast.emit("eventoTodosMenosActual"," mensaje para todos los clientes menos el actual");

        //enviar datos a todos los clientes
        socketServer.emit("eventoParaTodos", "nueva promocion");
    },4000)
});

//routes
app.use(viewsRouter);