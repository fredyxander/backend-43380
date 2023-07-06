import { Router } from "express";
import { uploader } from "../utils.js";

const router = Router();

const pets = [];

// http://localhost:8080/api/pets/  === http://localhost:8080/api/pets
router.get("/",(req,res)=>{
    res.json({status:"success", data:pets});
});

router.post("/", uploader.single("fileImage") , (req,res)=>{
    console.log("files", req.file);
    const newPet = req.body;
    newPet.thumbnail = req.file.path;
    pets.push(newPet);
    res.json({status:"success", message:"mascota creada"});
});


export {router as petsRouter}