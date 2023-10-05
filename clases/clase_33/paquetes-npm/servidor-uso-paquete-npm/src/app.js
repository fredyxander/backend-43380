import express from "express";
import {sumar, restar, multiplicar, dividir, potencia} from "paquete-operaciones";

const port = 8080;
const app =express();

app.listen(port,()=>console.log("Server listening..."));

app.get("/sumar", (req,res)=>{
    const {num1, num2} = req.query;
    const result = sumar(parseInt(num1), parseInt(num2));
    res.json({status:"success", result:result});
});