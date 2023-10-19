import express from 'express';
import {engine} from 'express-handlebars';
import {__dirname} from './utils.js';
import path from "path";
import { config } from './config/config.js';
import {connectDB} from "./config/dbConnection.js";

import viewsRouter from './routes/views.router.js';
import usersRouter from './routes/users.router.js';

const app = express();
const port = config.server.port;

//midlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Listening on ${port}`));

//conexión base de datos
connectDB();

//config handlebars
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views',path.join(__dirname, "/views"));

//routes
app.use('/',viewsRouter);
app.use('/api/users',usersRouter);
