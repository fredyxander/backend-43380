// db.usuarios.insertMany([
//     {name:"pepe", age:20},
//     {name:true, age:"20"},
// ])

import mongoose from "mongoose";

const usersCollection = "users"; //nombre de la coleccion donde guardamos los documentos

const usersSchema = new mongoose.Schema({
    //definimos propiedades y caracteristicas para el documento de un usuario
    first_name:{
        type:String, //tipo de dato
        required:true, //propiedad obligatorio
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:Number
});

export const usersModel = mongoose.model(usersCollection,usersSchema);