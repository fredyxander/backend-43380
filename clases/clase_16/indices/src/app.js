import express from "express";
import { connectDB } from "./config/dbConnection.js";
import { usersModel } from "./models/users.model.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));

connectDB();

app.get("/consultaNormal", async(req,res)=>{
    try {
        const result = await usersModel.find({email:"iwahbergcv@mail.ru"}).explain("esecutionStats");
        console.log(result);
        res.json({status:"success", message:"usuario encontrado"});
    } catch (error) {
        res.json({status:"error", message:'Hubo un error en la consulta'});
    }
});