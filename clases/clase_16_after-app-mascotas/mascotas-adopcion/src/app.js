import express from "express";
import {config} from "./config/config.js";
import { connectDB } from "./config/dbConnection.js";
import { __dirname } from "./utils.js";
import path from "path";
import { engine } from 'express-handlebars';

import { viewsRouter } from "./routes/views.routes.js";
import { petsRouter } from "./routes/pets.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = config.server.port;
const app = express();

app.listen(port,()=>console.log("Server ok"));
connectDB();

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

//Configuración del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//routes
app.use(viewsRouter);
app.use("/api/pets",petsRouter);
app.use("/api/users", usersRouter);