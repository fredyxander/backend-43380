import mongoose from "mongoose";

const ordersColecction = "orders";

const orderSchema = new mongoose.Schema({
    orderNumber:{
        type:String,
        required:true
    },
    business:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"business"
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    products:[],
    totalPrice:{
        type:Number,
        required:true
    },
    status:{
        type:String,
        default:'pendiente'
    }
});

export const ordersModel = mongoose.model(ordersColecction,orderSchema);