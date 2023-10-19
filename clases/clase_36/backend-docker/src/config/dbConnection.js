import mongoose from "mongoose";
import { config } from "./config.js";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.URL);
        console.log("Base de datos conectada con exito!");
    } catch (error) {
        console.log(`No se pudo establecer la conexión de la base de datos, error: ${error.message}`);
    }
};