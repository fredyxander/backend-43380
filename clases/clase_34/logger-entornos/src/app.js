import express from "express";
import { addLogger } from "./helpers/logger.js";

const port  = 8080;
const app = express();
const logger = addLogger();

app.listen(port,()=>logger.info("Server ok"));

app.get("/",(req,res)=>{
    // console.log("peticion get recibida");
    logger.silly("mensaje de nivel silly");
    logger.info("mensaje de nivel info");
    logger.debug("mensaje con nivel debug");
    logger.http("mensaje de nivel http");
    logger.error("mensaje de nivel error");
    logger.warn("mensaje de nivel warn");
    logger.verbose("mensaje de nivel verbose");
    res.send("peticion recibida");
});