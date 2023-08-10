import express from "express";
import cookieParser from "cookie-parser";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ready"));

//midlewares
app.use(cookieParser("securityKey"));//gestion de cookies por parte del servidor

app.get("/",(req,res)=>{
    res.send("bienvenido");
});

//ruta para crear una cookie
app.get("/crearCookie",(req,res)=>{
    res.cookie("cookie1","oreo").send("cookie creada");
});

app.get("/crearCookie2",(req,res)=>{
    res.cookie("cookie2","Pepitos",{maxAge:5000}).send("cookie creada");
});

//ruta para cookie firmada
app.get("/crearCookie4",(req,res)=>{
    res.cookie("cookie4","{username:'pepe',role:'user'}",{signed:true}).send("cookie creada");
});

//ruta para obtener o leer las cookies
app.get("/leerCookies",(req,res)=>{
    const cookies = req.cookies; //req.cookies['nombreCookie']
    res.send(cookies);
});

//ruta para obtener las cookies firmadas
app.get("/leerCookiesFirmadas",(req,res)=>{
    const cookies = req.signedCookies;
    res.send(cookies);
});

//ruta para eliminar de una cookie
app.get("/eliminarCookie",(req,res)=>{
    res.clearCookie('cookie1').send("cookie eliminada")
});