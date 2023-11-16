import { Router } from "express";
import passport from "passport";
//importar el controlador de Sessions
import { SessionsController } from "../controllers/sessions.controller.js";
import { uploaderProfile } from "../utils.js";

const router  = Router();
                            //req.file
router.post("/signup", uploaderProfile.single("avatar") , passport.authenticate("signupStrategy", {
    failureRedirect:"/api/sessions/fail-signup"
}), SessionsController.redirectLogin);

router.get("/fail-signup", SessionsController.failSignup);

router.post("/login", passport.authenticate("loginStrategy", {
    failureRedirect:"/api/sessions/fail-login"
}), SessionsController.renderProfile);

router.get("/fail-login", SessionsController.failLogin);

router.post("/forgot-password", SessionsController.forgotPassword);

router.post("/reset-password", SessionsController.resetPassword);

router.get("/logout", SessionsController.logout);

export {router as sessionsRouter};