import { Router } from "express";
import { productService } from "../dao/index.js";

const validateFields = (req,res,next)=>{
    const productInfo = req.body;
    if(!productInfo.title || !productInfo.price){
        return res.json({status:"error", message:"campos incompletos"})
    } else {
        next();
    }
};

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const limit = req.query.limit;
        const products = await productService.get();
        if(limit){
            //devolver productos de acuerdo al limite
        } else {
            res.json({status:"success", data:products});
        }
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:pid",(req,res)=>{});

router.post("/", validateFields, async(req,res)=>{
    //Agregar el producto
    try {
        const productInfo = req.body;
        const productCreated = await productService.save(productInfo);
        res.json({status:"success", data:productCreated, message:"producto creado"});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.put("/:pid",validateFields,(req,res)=>{
    const productInfo = req.body;
    //actualiza el producto
});

router.delete("/:pid",(req,res)=>{});

export {router as productsRouter}
