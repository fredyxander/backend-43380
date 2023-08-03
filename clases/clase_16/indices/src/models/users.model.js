import mongoose from  "mongoose";

const usersCollection = "users";

const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        index:true
    },
    gender:{
        type:String,
        required:true
    }
});

export const usersModel = mongoose.model(usersCollection,userSchema);