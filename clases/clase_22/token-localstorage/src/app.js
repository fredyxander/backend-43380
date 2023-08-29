import express from "express";
import path from "path";
import { __dirname, generateToken } from "./utils.js";

const port = 8080;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/public")));

app.listen(port,()=>console.log("Server ok"));

const users = [
    {email:"pepe@gmail.com", password:"coder"},
    {email:"juan@gmail.com", password:"1234"},
];

//routes
app.post("/login", (req,res)=>{
    const loginForm = req.body;
    const user = users.find(u=>u.email === loginForm.email);
    if(user){
        if(user.password === loginForm.password){
            //generar el token
            const token = generateToken({email:loginForm.email});
            res.json({status:"success", message:"login exitoso", accessToken:token});
        } else {
            res.json({status:"error", message:"credenciales invalidas"});
        }
    } else {
        res.json({status:"error", message:"usuario no registrado"});
    }
});

app.get("/profile", (req,res)=>{
    console.log(req.headers["authorization"]);
    res.json({message:"peticion recibida"});
});