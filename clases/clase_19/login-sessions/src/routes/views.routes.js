import { Router } from "express";
import { checkUserAuthenticated, showLoginView } from "../middlewares/auth.js";

const router = Router();

router.get("/",(req,res)=>{
    res.render("home");
});

router.get("/registro",showLoginView,(req,res)=>{
    res.render("signup");
});

router.get("/login", showLoginView, (req,res)=>{
    res.render("login");
});

router.get("/perfil", checkUserAuthenticated, (req,res)=>{
    console.log(req.session);
    res.render("profile",{user: req.session.userInfo});
});

export {router as viewsRouter};