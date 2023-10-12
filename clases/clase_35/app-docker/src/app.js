import express from "express";

const port = 8080;
const app =express();

app.listen(port,()=>console.log("Servidor ok"));

app.get("/", (req,res)=>{
    res.send("Bienvenidos al servidor con doker")
});