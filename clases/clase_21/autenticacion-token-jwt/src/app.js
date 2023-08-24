import express from "express";
import { generateToken, validateToken } from "./utils.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());

app.listen(port,()=>console.log("Server ok"));

const users = [];

//rutas
app.post("/signup", (req,res)=>{
    const userInfo = req.body;
    const user = users.find(u=>u.email === userInfo.email);
    if(user){
        return res.json({status:"error", message:"El usuario ya fue registrado"});
    }
    users.push(userInfo);
    res.json({status:"success", message:"Usuario registrado"});
});

app.post("/login", (req,res)=>{
    const loginInfo = req.body;
    const user = users.find(u=>u.email === loginInfo.email);
    if(!user){
        return res.json({status:"error", message:"El usuario no esta registrado"});
    }
    //validamos credenciales
    if(user.password !== loginInfo.password){
        return res.json({status:"error", message:"Credenciales invalidas"});
    }
    //ya validadas las credenciales, generamos el token para el usuario
    const accessToken = generateToken({email:user.email, role:user.role});
    res.json({status:"success", message:"login exitoso", accessToken});
});

app.get("/profile", validateToken, (req,res)=>{
    res.json({status:"success", data:req.user});
});