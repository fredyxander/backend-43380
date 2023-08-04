import mongoose from "mongoose";
import { petsCollection } from "../../constants/index.js";

const petSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    specie:{
        type:String,
        required:true
    },
    breed:{
        type:String
    }
});

export const petsModel = mongoose.model(petsCollection,petSchema);