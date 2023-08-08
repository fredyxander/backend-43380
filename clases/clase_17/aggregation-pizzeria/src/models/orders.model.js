import mongoose from "mongoose";

const ordersCollection = "orders";

const orderSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    size:{
        type:String,
        enum:["small","medium","large"],
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    date:Date
});

export const ordersModel = mongoose.model(ordersCollection,orderSchema);