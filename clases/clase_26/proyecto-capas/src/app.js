import express from "express";

import { toysRouter } from "./routes/toys.routes.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());//json en el body de una peticion
app.use(express.urlencoded({extended:true}));//json si la peticion viene de un formulario

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//routes
app.use("/api/toys",toysRouter);