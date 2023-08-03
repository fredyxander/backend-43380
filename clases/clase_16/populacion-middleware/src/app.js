import express from "express";
import { connectDB } from "./config/dbConnection.js";
import {studentsModel} from "./models/students.model.js";
import {coursesModel} from "./models/courses.model.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server ok`));
connectDB();

//midlewares
app.use(express.json());

//ruta para crear los estudiantes
const newStudents = [
    { first_name: "Juan", email: "juanperez@example.com", gender:"Masculino" },
    { first_name: "Maria", email: "mariagarcia@example.com", gender:"Fememino" },
    { first_name: "Pedro", email: "pedromartinez@example.com", gender:"Masculino" },
    { first_name: "Ana", email:"anarodriguez@example.com", gender:"Fememino" },
    { first_name: "Luis", email: "luissanchez@example.com", gender:"Masculino" },
    { first_name: "Isabel", email: "isabelgonzalez@example.com", gender:"Fememino" },
    { first_name: "Carlos", email: "carlosgomez@example.com", gender:"Masculino" },
    { first_name: "Sofia", email: "sofiaperez@example.com", gender:"Fememino" },
    { first_name: "Ramon", email: "ramongarcia@example.com", gender:"Masculino" }
];
app.post("/createStudents",async(req,res)=>{
    try {
        const response = await studentsModel.create(newStudents);
        res.send(response);
    } catch (error) {
        res.send(error.message);
    }
});

//ruta para crear los cursos
const newCourses = [
    {title:"Javascript"},
    {title:"Nodejs"},
    {title:"html"},
    {title:"React"},
];
app.post("/createCourses", async(req,res)=>{
    try {
        const response = await coursesModel.create(newCourses);
        res.send(response);
    } catch (error) {
        res.send(error.message);
    }
});

//ruta para asignar estudiantes al curso
app.put("/addStudentsCourse",async(req,res)=>{
    try {
        const {studentId,courseId} = req.body;
        const course = await coursesModel.findById(courseId);
        if(!course){
            return res.send("Este curso no existe");
        }
        const student = await studentsModel.findById(studentId);
        if(!student){
            return res.send("Este estudiante no existe");
        }
        course.courseStudents.push(studentId);
        course.save();
        res.send("estudiante agregado");
    } catch (error) {
        res.send(error.message);
    }
});

//ruta para obtener un curso
app.get("/course/:courseId",async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        const response = await coursesModel.findById(courseId);
        if(!response){
            return res.send("este curso no existe");
        }
        res.send(response);
    } catch (error) {
        res.send(error.message);
    }
});

//ruta para obtener un curso con poulacion
app.get("/coursePopulate/:courseId",async(req,res)=>{
    try {
        const courseId = req.params.courseId;
        const response = await coursesModel.findById(courseId).populate("courseStudents");
        if(!response){
            return res.send("este curso no existe");
        }
        res.send(response);
    } catch (error) {
        res.send(error.message);
    }
});