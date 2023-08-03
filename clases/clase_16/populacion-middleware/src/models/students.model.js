import mongoose from "mongoose";
import { studentCollection } from "../constants/index.js";

const studentSchema = new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true
    }
});

export const studentsModel = mongoose.model(studentCollection,studentSchema);