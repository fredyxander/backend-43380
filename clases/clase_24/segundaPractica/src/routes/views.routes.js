import { Router } from "express";

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/registro",(req,res)=>{
    res.render("signup");
});

router.get("/login",(req,res)=>{
    res.render("login");
});

router.get("/perfil",(req,res)=>{
    const user = req.user;
    res.render("profile",{user});
});

export {router as viewsRouter}