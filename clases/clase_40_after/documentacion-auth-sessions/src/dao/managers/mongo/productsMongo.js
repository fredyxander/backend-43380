import {productsModel} from "../../models/products.model.js";

export class ProductsMongo{
    constructor(){
        this.model = productsModel;
    };

    //get products
    async get(){
        try{
            const products = await this.model.find();
            return products;
        }catch(error){
            console.log(error.message);
            // throw error
            throw new Error("Hubo un error al obtener los productos");
        }
    };

    async getById(id){
        //devuelve el producto que cumple con el id recibido
        try{
            const product = await this.model.findById(id);
            return product;
        }catch(error){
            console.log(error.message);
            // throw error
            throw new Error("Hubo un error al obtener el producto");
        }
    };

    //save product
    async save(productInfo){
        try{
            const productCreated = await this.model.create(productInfo)
            return productCreated;
        }catch(error){
            console.log(error.message);
            // throw error
            throw new Error("Hubo un error al crear el producto");
        }
    };

    //delete product
    async delete(productId){
        try{
            const result = await this.model.findByIdAndDelete(productId);
            if(!result){
                throw new Error("No existe este producto");
            }
            return result;
        }catch(error){
            console.log(error.message);
            // throw error
            throw new Error("Hubo un error al eliminar el producto");
        }
    };
}