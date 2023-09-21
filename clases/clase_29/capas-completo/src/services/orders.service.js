import { ordersDao } from "../dao/index.js";

export class OrdersService{
    static getAllOrders = async()=>{
        return await ordersDao.get();
    };

    static getOrderById = async(id)=>{
        return await ordersDao.getById(id);
    };

    static createOrder = async(order)=>{
        return await ordersDao.create(order);
    };

    static resolveOrder = async(id,order)=>{
        return await ordersDao.update(id,order);
    };
};