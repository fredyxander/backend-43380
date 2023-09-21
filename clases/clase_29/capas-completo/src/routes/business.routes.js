import { Router } from "express";
import { BusinessController } from "../controller/buisness.controller.js";

const router = Router();

router.get("/", BusinessController.getAllBusiness);
router.get("/:bid", BusinessController.getBusinessById);
router.post("/", BusinessController.createBusiness);
router.put("/:bid/product", BusinessController.addProduct);

export {router as businessRouter};