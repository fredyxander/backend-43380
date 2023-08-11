import mongoose from "mongoose";
import { cartsCollection } from "../../constants/index.js";

const cartSchema = new mongoose.Schema({
    products:{
        type:[],
        default:[]
    }
});

export const cartsModel = mongoose.model(cartsCollection,cartSchema);