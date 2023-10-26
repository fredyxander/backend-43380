//importar la capa de persisitencia
import { productsDao } from "../dao/managers/index.js";

export class ProductsService{
    static getProducts = async()=>{
        return await productsDao.get();
    };

    static getProduct = async(productId)=>{
        return await productsDao.getById(productId);
    };

    static createProduct = async(productInfo)=>{
        return await productsDao.save(productInfo);
    };

    static deleteProduct = async(productId)=>{
        return await productsDao.delete(productId);
    };
}