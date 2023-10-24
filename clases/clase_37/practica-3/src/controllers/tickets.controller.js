import { TicketsService } from "../services/tickets.service.js";
import { CartsService } from "../services/carts.service.js";
import {ProductsService} from "../services/products.service.js";

export class TicketsController{
    static async createTicket(req,res){
        try {
            const cartId = req.params.cid;
            const cart = await CartsService.getCart(cartId);
            // const productsCart = cart.products;
            // let purchaseProducts=[];
            // let rejectedProducts=[];
            // //iteramos por cada producto del carrito
            // for(let i=0;i<productsCart.length;i++){
            //     const product = ProductsService.getProduct(productsCart[i].productId);
            //     //si quantiy < product.stock

            //     //else, agregamos el producto a purchaseProducts, y adicional actualizamos el producto product.stock - quantity
            // }
            // const newTicket = {
            //     code,
            //     purchase_datetime:new Date(),
            //     amount,
            //     purchaser:req.user.email,
            // }
            const ticketCreated = await TicketsService.createTicket(newTicket);
        } catch (error) {
            res.json({status:"error", message:error.message});
        }
    }
}