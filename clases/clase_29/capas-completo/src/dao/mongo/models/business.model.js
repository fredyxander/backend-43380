import mongoose from "mongoose";

const businessColecction = "business";

const businessSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    products:{
        type:[],
        default:[]
    }
});

export const businessModel = mongoose.model(businessColecction,businessSchema);