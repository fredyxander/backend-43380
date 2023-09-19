import mongoose from "mongoose";

const productsCollection = "products";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});

export const productsModel = mongoose.model(productsCollection,productSchema);