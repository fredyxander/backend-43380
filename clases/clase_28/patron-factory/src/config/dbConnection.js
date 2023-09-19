import mongoose from "mongoose";
import { config } from "./config.js";

//conexion a base de datos
export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        console.log("conectado a la base de datos");
    } catch (error) {
        console.log(`Hubo un error al conectarse a la base de datos ${error.message}`);
    }
};