import mongoose from "mongoose";

//nombre de la collecion de productos
const productsCollection = "products";

//esquema de productos
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    code:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        enum:["Ropa","Deportes","Cosmetica","Electrodomesticos"]
    },
    stock:{
        type:Number,
        required:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    thumbnail:{
        type:String,
        required:true
    }
});

export const productsModel = mongoose.model(productsCollection,productSchema);