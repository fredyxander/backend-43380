import { config } from "./config.js";
import mongoose from "mongoose";

export const connectDB = async()=>{
    try {
        await mongoose.connect(config.mongo.url);
        console.log("base de datos conectada");
    } catch (error) {
        console.log(`Error al conectar la base de datos ${error.message}`);
    }
}