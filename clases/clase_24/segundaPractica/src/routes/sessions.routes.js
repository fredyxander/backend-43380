import { Router } from "express";
import passport from "passport";

const router  = Router();

router.post("/signup", passport.authenticate("signupStrategy", {
    failureRedirect:"/api/sessions/fail-signup"
}), (req,res)=>{
    res.redirect("/login");
} );

router.get("/fail-signup", (req,res)=>{
    res.send("<p>No se pudo registrar al usuario, <a href='/registro'>intenta de nuevo</a></p>");
});

router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect:"/api/sessions/fail-login"
}), (req,res)=>{
    const user = req.user;
    console.log("user", user);
    res.render("profile",{user});
});

router.get("/fail-login", (req,res)=>{
    res.send("<p>No se pudo loguear al usuario, <a href='/login'>intenta de nuevo</a></p>");
});


export {router as sessionsRouter};