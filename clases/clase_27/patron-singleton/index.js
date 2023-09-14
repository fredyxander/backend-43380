import { MongoSingleton } from "./connectDB.js";

const primeraInstancia = MongoSingleton.getInstance();
const segundaInstancia = MongoSingleton.getInstance();
const terceraInstancia = MongoSingleton.getInstance();
