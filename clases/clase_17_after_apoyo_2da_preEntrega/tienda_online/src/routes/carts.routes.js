import { Router } from "express";
import { cartService, productService } from "../dao/index.js";

const router = Router();

router.post("/", async(req,res)=>{
    try {
        const cartCreated = await cartService.save();
        res.json({status:"success", data:cartCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.get("/:cid", (req,res)=>{});

router.post("/:cid/product/:pid", async(req,res)=>{
    try {
        const cartId = req.params.cid;
        const productId = req.params.pid;
        // const cart = await cartService.getById(cartId);
        // const product = await productService.getById(productId);
        //verificar si el producto ya existe en ese carrito
        //condicion
        //si existe el producto, a ese producto a la cantidad le suman 1

        //si no existe el producto, agregar el nuevo producto al carrito
            // const newProduct = {
            //     product:productId,
            //     quantity:1
            // }
            // cartId.products.push(newProduct);

        //actualizar el carrito
        // await cartService.update(cartId, cart);
        res.json({status:"success", data:cartCreated});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export {router as cartsRouter}