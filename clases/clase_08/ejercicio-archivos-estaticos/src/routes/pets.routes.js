import { Router } from "express";

const router = Router();

const pets = [];

// http://localhost:8080/api/pets/  === http://localhost:8080/api/pets
router.get("/",(req,res)=>{
    res.json({status:"success", data:pets});
});

router.post("/",(req,res)=>{
    const newPet = req.body;
    pets.push(newPet);
    res.json({status:"success", message:"mascota creada"});
});


export {router as petsRouter}