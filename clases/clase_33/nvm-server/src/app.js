import express from "express";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Servidor ejecutandose"));

app.get("/",(req,res)=>{
    res.send("Bienvenido coderhouse");
});