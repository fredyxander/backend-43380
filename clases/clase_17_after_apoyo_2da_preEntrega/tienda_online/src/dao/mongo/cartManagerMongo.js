import { cartsModel } from "../models/carts.model.js";

export class CartManagerMongo{
    constructor(){
        this.model=cartsModel;
    };

    async getAll(){
        try {
            const carts = await this.model.find();
            return carts;
        } catch (error) {
            throw error;
        }
    };

    async save(){
        try {
            const cartCreated = await this.model.create({});
            return cartCreated;
        } catch (error) {
            throw error;
        }
    };

    async update(){};
}