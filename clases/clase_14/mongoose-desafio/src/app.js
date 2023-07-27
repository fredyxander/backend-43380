import express from "express";
import mongoose from "mongoose";

import { studentsRouter } from "./routes/students.routes.js";

const port = 8080;
const app = express();

//middleware
app.use(express.json());

app.listen(port,()=>console.log(`Server ok`));

//conexion a la base de datos
try{
    //conexion
    await mongoose.connect("URL MONGO");
    console.log("base de datos conectada");
}catch(error){
    console.log(`Hubo un error al conectar la base de datos ${error.message}`);
}

//routes
app.use("/api/students",studentsRouter);