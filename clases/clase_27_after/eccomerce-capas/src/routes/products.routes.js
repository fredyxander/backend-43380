import { Router } from "express";
//importar el controlador de productos
import { ProductsController } from "../controllers/products.controller.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", ProductsController.createProduct);
router.put("/:pid", ProductsController.updateProduct);
router.delete("/:pid", ProductsController.deletProduct);

export {router as productsRouter}