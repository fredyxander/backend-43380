import {Router} from "express";
import { petsService } from "../dao/index.js";

const router = Router();

router.post("/",async(req,res)=>{
    try {
        const petInfo = req.body;
        const petCreated = await petsService.savePet(petInfo);
        res.json({status:"success", data:petCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/",async(req,res)=>{
    try {
        const pets = await petsService.getPets();
        res.json({status:"success", data:pets});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:pid",async(req,res)=>{
    try {
        const petId = req.params.pid;
        const pet = await petsService.getPet(petId);
        res.json({status:"success", data:pet});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.put("/:pid",async(req,res)=>{
    try {
        const petId = req.params.pid;
        const petInfo = req.body;
        const petUpdate = await petsService.updatePet(petId,petInfo);
        res.json({status:"success", data:petUpdate});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.delete("/:pid",async(req,res)=>{
    try {
        const petId = req.params.pid;
        const result = await petsService.deletePet(petId);
        res.json({status:"success", message:result});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as petsRouter};