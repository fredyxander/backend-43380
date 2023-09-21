import {ordersModel} from "../models/orders.model.js";


export class OrdersMongo{
    constructor(){
        this.model = ordersModel;
    };

    async get(){
        try {
            const orders = await this.model.find();
            return orders;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener las órdenes");
        }
    };


    async getById(id){
        try {
            const order = await this.model.findById(id);
            if(!order){
                throw new Error("La orden no existe");
            } else {
                return order;
            }
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener la orden");
        }
    };


    async create(order){
        try {
            const orderCreated = await this.model.create(order);
            return orderCreated;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al crear la orden");
        }
    };


    async resolve(id,order){
        try {
            const orderUpdate = await this.model.findByIdAndUpdate(id, order,{new:true});
            return orderUpdate;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al actualizar la orden");
        }
    };
};
