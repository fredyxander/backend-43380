import mongoose from "mongoose";

const contactsCollection = "contacts";

const contactSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    }
});

export const contactsModel = mongoose.model(contactsCollection,contactSchema);