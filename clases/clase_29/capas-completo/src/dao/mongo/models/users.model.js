import mongoose from "mongoose";

const usersColecction = "users";

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
    role:{
        type:String,
        required:true
    },
    orders:{
        type:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "orders"
            }
        ],
        default:[]
    }
});

export const usersModel = mongoose.model(usersColecction,userSchema);