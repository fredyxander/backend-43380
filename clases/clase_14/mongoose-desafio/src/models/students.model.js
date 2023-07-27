import mongoose from "mongoose";

const studentsCollection = "estudiantes"; //nombre de la coleccion donde guardamos los documentos

const studentSchema = new mongoose.Schema({
    //definimos propiedades y caracteristicas para el documento de un estudiante
    nombre:{
        type:String, //tipo de dato
        required:true, //propiedad obligatorio
    },
    apellido:{
        type:String,
        required:true
    },
    dni:{
        type:String,
        required:true,
        unique:true,
    },
    edad:{
        type:Number
    }
});

export const studentsModel = mongoose.model(studentsCollection,studentSchema);