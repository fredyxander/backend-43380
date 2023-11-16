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
            productInfo.owner = req.user._id;
            productInfo.thumbnail = req.file.filename;
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

    static deletProduct = async(req,res)=>{
        try {
            const productId = req.params.pid;
            const product = await ProductsService.getProduct(productId);
            //validar que el usuario que esta intentando borrar el producto
            //Si es premium y es el creador del producto
            //Si es usuario administrador
            if((req.user.role === "premium" && product.owner.toString() === req.user._id.toString()) || req.user.role === "admin"){
                await ProductsService.deleteProduct(productId);
                return res.json({status:"success", message:"producto eliminado"});
            } else {
                return res.json({status:"error", message:"no tienes permisos"});
            }
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };
}