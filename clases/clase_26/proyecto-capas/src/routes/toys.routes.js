import { Router } from "express";
//importamos la capa de controlador
import { ToysController } from "../controllers/toys.controller.js";

const router = Router();

router.get("/", ToysController.getToys);
router.post("/",ToysController.createToy);
router.delete("/:id", ToysController.deleteToy);

export {router as toysRouter};