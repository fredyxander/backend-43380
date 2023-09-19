import {productsModel} from "./models/products.model.js";

export class ProductsManagerMongo{
    constructor(){
        this.model = productsModel;
    };

    async get(){
        try {
            const products = await this.model.find();
            return products;
        } catch (error) {
            throw error;
        }
    };
};