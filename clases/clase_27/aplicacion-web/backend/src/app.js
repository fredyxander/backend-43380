import express from "express";
import cors from "cors";

const port = 8080;
const app =express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.listen(port,()=>console.log(`Servidor escuchando en el puerto ${port}`));

const users = [
    {name:"pepe", age:20},
    {name:"Lucas", age:40},
    {name:"Ana", age:30},
    {name:"Camila", age:30}
];

//routes
app.get("/users", (req,res)=>{
    res.json({status:"success", data: users});
});

app.post("/users", (req,res)=>{
    const user = req.body;
    users.push(user);
    res.json({status:"success", message:"usuario creado"});
});