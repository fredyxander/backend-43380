import mongoose from "mongoose";
import {usersCollection, petsCollection} from "../../constants/index.js";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userPets:{
        type:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:petsCollection
            }
        ],
        default:[]
    }
});

export const usersModel = mongoose.model(usersCollection,userSchema);