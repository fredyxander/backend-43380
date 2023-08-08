import express from "express";
import { connectDB } from "./config/dbConnection.js";
import {studentsModel} from "./models/students.model.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ok"));
connectDB();

const newstudents = [
    {name:"Pepe",age:20},
    {name:"Ana", age:30},
    {name:"Maria", age:35},
    {name:"Camila",age:18},
    {name:"Juan",age:17},
    {name:"Lucas",age:16},
    {name:"Marcos", age:15},
    {name:"Fabrizio", age:35},
    {name:"Franco",age:18},
    {name:"Gonzalo",age:27},
    {name:"Leticia", age:35},
    {name:"Miguel",age:18},
    {name:"Karen",age:27},
];

const operations = async()=>{
    // const result = await studentsModel.insertMany(newstudents);
    // console.log("result",result)

    //consulta normal de todos los docs de la collecion.
    // const students = await studentsModel.find();
    // console.log("students", students);

    //paginate parametros:
    //query o filtro:podemos filtrar la info de la consulta, {}no se aplica filtro
    //limit:El numero max de docs
    //page:1
    const students = await studentsModel.paginate(
        {},
        {limit:5,page:3}
    );
    console.log(students);
}
operations();