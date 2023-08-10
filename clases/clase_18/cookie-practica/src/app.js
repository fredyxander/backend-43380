import express from "express";
import cookieParser from "cookie-parser";
import { engine } from 'express-handlebars';
import { __dirname } from "./utils.js";
import path from "path";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ready"));

//midlewares
app.use(cookieParser("securityKey"));//gestion de cookies por parte del servidor
app.use(express.urlencoded({extended:true}));

//configuracion del motor de plantillas
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,"/views"));

//rutas
app.get("/",(req,res)=>{
    res.render("home")
});

app.post("/crearCookieForm",(req,res)=>{
    const loginInfo = req.body;
    res.cookie("userInfo",`{user:${loginInfo.email}}`,{maxAge:10000}).send("Informacion recibida");
});

app.get("/leerCookies",(req,res)=>{
    const cookies = req.cookies;
    res.send(cookies);
});