import { Router } from "express";
import { productsDao } from "../dao/factory.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const products = await productsDao.get();
        res.json({status:"success", data:products});
    } catch (error) {
        res.json({status:"error", error:error.message});
    }
});

export {router as productsRouter};