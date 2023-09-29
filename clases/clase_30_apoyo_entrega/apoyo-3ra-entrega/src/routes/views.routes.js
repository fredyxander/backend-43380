import { Router } from "express";
//importar el controlador
import { ViewsController } from "../controllers/views.controller.js";

const router = Router();

router.get("/",ViewsController.renderHome);
router.get("/registro", ViewsController.renderSignup);
router.get("/login",ViewsController.renderLogin);
router.get("/perfil",ViewsController.renderProfile);

export {router as viewsRouter}