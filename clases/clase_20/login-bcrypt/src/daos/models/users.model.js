import mongoose from "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    age:Number,
    password:{
        type:String,
        required:true
    }
});

export const usersModel = mongoose.model(usersCollection,userSchema);