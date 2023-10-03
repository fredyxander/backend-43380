import express from "express";
import compression from "express-compression";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

//compresion para todas las rutas
// app.use(compression());

app.get("/endpointNormal",(req,res)=>{
    res.json({status:"success", data:"palabra".repeat(200000)});
});

//aplicando la compression para esta ruta
app.get("/endpointGzip", compression() ,(req,res)=>{
    res.json({status:"success", data:"palabra".repeat(200000)});
});

app.get("/endpointBrottli", compression({brotli:{enabled:true, zlip:{}}}) ,(req,res)=>{
    res.json({status:"success", data:"palabra".repeat(200000)});
});