import { Router } from "express";

const router = Router();

let pets = [];

//funcion para validar parametros
const validateParam = (req,res,next,petValue)=>{
    const regExp = /^[a-zA-Z\s]+$/;
    if(regExp.test(petValue)){
        const pet = pets.find(p=>p.name === petValue);
        if(!pet){
            req.pet=null;
        } else {
            req.pet = pet;
        }
        next();
    } else {
        res.json({status:"error", message:"El valor del parametro es invalido"});
    }
}

//middleware de params
router.param("pet",validateParam)

router.post("/",(req,res)=>{
    const pet = req.body;
    pets.push(pet);
    res.json({status:"success", message:"mascota agregada"});
});

router.get("/:pet", (req,res)=>{
    if(!req.pet){
        res.json({status:"error", message:"la mascota no existe"});
    } else {
        res.json({status:"success", data: req.pet});
    }
});

router.put("/:pet", (req,res)=>{
    if(!req.pet){
        res.json({status:"error", message:"la mascota no existe"});
    } else {
        const pet = req.pet;
        pet.adopted = true
        res.json({status:"success", data: pet, message:"mascota actualizada"});
    }
});

export { router as petsRouter};