import { Router } from "express";
//importar el controlador
import { ViewsController } from "../controllers/views.controller.js";

const router = Router();

router.get("/",ViewsController.renderHome);
router.get("/registro", ViewsController.renderSignup);
router.get("/login",ViewsController.renderLogin);
router.get("/perfil",ViewsController.renderProfile);
router.get("/forgot-password", ViewsController.renderForgot);
router.get("/reset-password", ViewsController.renderResetPass);

export {router as viewsRouter}