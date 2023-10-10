import express from "express";
import {logger} from "./helpers/logger.js";

const port  = 8080;
const app = express();

app.listen(port,()=>console.log("Server ok"));

app.get("/",(req,res)=>{
    // console.log("peticion get recibida");
    logger.info("mensaje de nivel info");
    logger.debug("mensaje con nivel debug");
    logger.error("mensaje de nivel error");
    logger.verbose("mensaje de nivel verbose");
    res.send("peticion recibida");
});