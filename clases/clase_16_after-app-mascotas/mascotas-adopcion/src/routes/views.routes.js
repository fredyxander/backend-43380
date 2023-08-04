import { Router } from "express";
import { petsService } from "../dao/index.js";

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/registro",(req,res)=>{
    res.render("signup");
});

router.get("/mascotas",async(req,res)=>{
    try {
        const pets = await petsService.getPets();
        res.render("pets",{pets});
    } catch (error) {
        res.send("<p>Hubo un error al mostrar las mascotas, <a href='/'>Ir al inicio</a></p>");
    }
});

export {router as viewsRouter}