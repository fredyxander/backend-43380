//importar el ProductService y CartsService
import {CartsService} from "../services/carts.service.js";
import {ProductsService} from "../services/products.service.js";

export class CartsController {
    static createCart = async(req, res)=>{
        try {
            const newCart = {};
            const cartCreated = await CartsService.createCart(newCart);
            res.json({status:"success", data:cartCreated});
        } catch (error) {
            console.log(error.menssage)
            res.json({status:"error", message:"hubo un error al crear el carrito"})
        }
    };

    static getCarts = async(req, res)=>{
        try {
            const carts = await CartsService.getCarts();
            res.json({status:"success", data:carts});
        } catch (error) {
            console.log(error.menssage)
            res.json({status:"error", message:"hubo un error el listado de carritos"})
        }
    };

    static addProductToCart = async(req,res)=>{
        try {
            const cartId = req.params.cid;
            const productId = req.params.pid;
            const cart = await CartsService.getCart(cartId);
            const product = await ProductsService.getProduct(productId);
            //verificar si el producto ya existe en ese carrito
            //condicion
            //si existe el producto, a ese producto a la cantidad le suman 1
            const productExist = cart.products.find(product=>product.productId === productId);
            console.log("productExist",productExist);
            //si no existe el producto, agregar el nuevo producto al carrito
            const newProduct = {
                productId:productId,
                quantity:1
            }
            cart.products.push(newProduct);
            //actualizar el carrito
            const cartUpdated = await CartsService.updateCart(cartId, cart);
            res.json({status:"success", data:cartUpdated});
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    };
}