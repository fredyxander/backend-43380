import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentsCollection = "students";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    }
});

//aplicacion de paginate al schema
studentSchema.plugin(mongoosePaginate);

export const studentsModel = mongoose.model(studentsCollection,studentSchema);