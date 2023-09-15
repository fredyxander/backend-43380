//import la capa de servicio
import { ProductsService } from "../services/products.service.js";

export class ProductsController{
    static getProducts = async(req,res)=>{
        try {
            const limit = req.query.limit;
            const products = await ProductsService.getProducts();
            if(limit){
                //devolver productos de acuerdo al limite
            } else {
                res.json({status:"success", data:products});
            }
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static getProduct = async(req,res)=>{};

    static createProduct = async(req,res)=>{
        //Agregar el producto
        try {
            const productInfo = req.body;
            const productCreated = await ProductsService.createProduct(productInfo);
            res.json({status:"success", data:productCreated, message:"producto creado"});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };

    static updateProduct = async(req,res)=>{
        const productInfo = req.body;
        //actualiza el producto
    };

    static deletProduct = async(req,res)=>{};
}