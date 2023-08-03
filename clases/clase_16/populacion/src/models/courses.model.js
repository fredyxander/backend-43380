import mongoose from "mongoose";
import { courseCollection, studentCollection } from "../constants/index.js";

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    courseStudents:{
        type:[//tipo array
            {//cada elemento es de tipo objeto, y contiene el id de un documento que pertenece a la coleccion "students"
                type:mongoose.Schema.Types.ObjectId,
                ref:studentCollection
            }
        ],
        default:[]
    }
});

//middleware de populacion
courseSchema.pre(["find","findOne"],function(next){
    this.populate("courseStudents");
});

export const coursesModel = mongoose.model(courseCollection,courseSchema);