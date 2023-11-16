import { Router } from "express";
//importar el controlador de productos
import { ProductsController } from "../controllers/products.controller.js";
import { checkRole, checkAuthenticated } from "../middlewares/auth.js";
import { uploaderProduct } from "../utils.js";

const router = Router();

router.get("/", ProductsController.getProducts);
router.get("/:pid", ProductsController.getProduct);
router.post("/", checkAuthenticated, checkRole(["admin", "superadmin","premium"]), uploaderProduct.single("thumbnail") , ProductsController.createProduct);
router.put("/:pid", checkAuthenticated, checkRole(["admin"]), ProductsController.updateProduct);
router.delete("/:pid", checkAuthenticated, checkRole(["admin","premium"]), ProductsController.deletProduct);

export {router as productsRouter}