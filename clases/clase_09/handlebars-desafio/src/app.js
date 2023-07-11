import express from "express";
import handlebars from "express-handlebars";
import { __dirname } from "./utils.js";
import path from "path";

import { viewsRouter } from "./routes/views.routes.js";
import { usersRouter } from "./routes/users.routes.js";

const port = 8080;
const app = express();

//midlewares
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.urlencoded({extended:true}));

app.listen(port,()=>console.log(`Server is listening on port ${port}`));

//configuracion para utilizar handlebars
app.engine('.hbs', handlebars.engine({extname: '.hbs'}));//inciar el motor de plantillas handlebars
app.set('view engine', '.hbs');//indicar que motor vamos a utilizar
app.set('views', path.join(__dirname,"/views"));//ruta de la carpeta de vistas

//routes
app.use(viewsRouter);
app.use("/api/users", usersRouter);