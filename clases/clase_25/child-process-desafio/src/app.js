import express from "express";
import {fork} from "child_process";
import { __dirname } from "./utils.js";
import path from "path";
import { sumar } from "./childs/child.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Servidor escuchando en el puerto ${port}`));

app.get("/calculo-bloq", (req,res)=>{
    const result = sumar();
    res.send(`El resultado de la suma es ${result}`);
});

app.get("/calculo-nobloq", (req,res)=>{
    const child = fork(path.join(__dirname,"/childs/child.js"));
    //desde el proceso padre enviamos un msg al hijo para comenzar la operacion
    child.send("start");

    //recibimos el resultado del proceso hijo
    child.on("message",(result)=>{
        res.send(`El resultado de la suma es ${result}`);
    });
});

app.get("/", (req,res)=>{
    res.send("bienvenidos");
});