import { cartsModel } from "../../models/carts.model.js";

export class CartsMongo{
    constructor(){
        this.model= cartsModel;
    };

    async save(cart) {
        try {
             const cartCreated = await this.model.create(cart);
             return cartCreated;
        } catch (error) {
            throw error;
        };
    };

    async getAll(){
        try{
            const carts = await this.model.find().lean();
            return carts;
        }catch(error){
            console.log(error.message);
            throw new Error("Hubo un error al obtener los carritos");
        }
    };

    async getById(cartId){
        try{
            const cart = await this.model.findById(cartId);
            if(!cart){
                throw new Error("Hubo un error al obtener el carrito");
            }
            return cart;
        }catch(error){
            console.log(error.message);
            throw new Error("Hubo un error al obtener el carrito");
        }
    };

    async update(cartId,cart){
        try {
            const cartUpdated = await this.model.findByIdAndUpdate(cartId, cart, {new:true});
            return cartUpdated;
        }
        catch (error) {
            console.error(error.message);
        };
    };
}