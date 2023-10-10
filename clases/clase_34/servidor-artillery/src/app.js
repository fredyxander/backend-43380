import express from "express";
import { addLogger } from "./helpers/logger.js";

const port  = 8080;
const app = express();
const logger = addLogger();

app.listen(port,()=>logger.info("Server ok"));

app.get("/operacionSencilla",(req,res)=>{
    let sum=0;
    for(let i=0;i<1000;i++){
        sum+=i;
    }
    res.send(`La suma es igual a ${sum}`);
});

app.get("/operacionCompleja",(req,res)=>{
    let sum=0;
    for(let i=0;i<5e7;i++){//50.000.000
        sum+=i;
    }
    res.send(`La suma es igual a ${sum}`);
});