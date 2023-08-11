import mongoose from "mongoose";
import { productsCollection } from "../../constants/index.js";
import mongoosePaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        default:0
    }
});
productSchema.plugin(mongoosePaginate);

export const productsModel = mongoose.model(productsCollection, productSchema);