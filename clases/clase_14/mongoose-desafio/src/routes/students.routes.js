import {Router} from "express";
import { studentsModel } from "../models/students.model.js";

const router = Router();

router.get("/",async(req,res)=>{
    try{
        const students = await studentsModel.find();
        res.json({status:"success", data:students});
    }catch(error){
        console.log(error.message);
        res.json({status:"error", message:"Hubo un error al obtener los estudiantes"});
    }
});

router.post("/",async(req,res)=>{
    try{
        const studentCreated = await studentsModel.create(req.body);
        res.json({status:"success", data:studentCreated});
    }catch(error){
        console.log(error.message);
        res.json({status:"error", message:"Hubo un error al crear el estudiante"});
    }
});

router.delete("/:sid",async(req,res)=>{
    try{
        const studentId= req.params.sid;
        await studentsModel.deleteOne({_id:studentId});
        res.json({status:"success", message:"estudiante eliminado"});
    }catch(error){
        console.log(error.message);
        res.json({status:"error", message:"Hubo un error al eliminar el estudiante"});
    }
});

export {router as studentsRouter}