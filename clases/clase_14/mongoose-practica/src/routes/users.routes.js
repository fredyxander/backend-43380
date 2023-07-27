import {Router} from "express";
import { usersModel } from "../models/users.model.js";

const router = Router();

router.get("/",async(req,res)=>{
    try{
        const users = await usersModel.find();
        res.json({status:"success", data:users});
    }catch(error){
        console.log(error.message);
        res.json({status:"error", message:"Hubo un error al obtener los usuarios"});
    }
});

export {router as usersRouter}