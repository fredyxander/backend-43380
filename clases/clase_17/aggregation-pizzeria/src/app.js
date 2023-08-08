import express from "express";
import { ordersModel } from "./models/orders.model.js";
import { connectDB } from "./config/dbConnection.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log("Server ok"));
connectDB();

const newOrders = [
    { name: "Pepperoni", size: "small", price: 19,quantity: 10, date:"2021-03-13T08:14:30Z" },
    { name: "Pepperoni", size: "medium", price: 20,quantity: 20, date :"2021-03-13T09:13:24Z"},
    { name: "Pepperoni", size: "large", price: 21,quantity: 30, date :"2021-03-17T09:22:12Z"},
    { name: "Cheese", size: "small", price: 12,quantity: 15, date :"2021-03-13T11:21:39.736Z" },
    { name: "Cheese", size: "medium", price: 13,quantity:50, date : "2022-01-12T21:23:13.331Z"},
    { name: "Cheese", size: "large", price: 14,quantity: 10, date : "2022-01-12T05:08:13Z"},
    { name: "Vegan", size: "small", price: 17,quantity: 10, date : "2021-01-13T05:08:13Z"},
    { name: "Vegan", size: "medium", price: 18,quantity: 10, date : "2021-01-13T05:10:13Z"}
];

const operations = async()=>{
    //insertar documentos
    // const result= await ordersModel.insertMany(newOrders);
    // console.log("result", result);

    //El metodo aggregare recibe un arreglo, donde cada elemnto del arreglo sera un etapa.
    const result = await ordersModel.aggregate([
        //Primer etapa:Filtro por tamaños de pizza
        {
            $match:{size:"medium"}
        },
        //Segunda etapa: Agrupar las pizzas medianas por sabor(name)
        {
            $group:{
                _id:"$name",
                totalQuantity:{$sum:"$quantity"}
            }
        },
        //tercera etapa:Ordenar por la cantidad.
        {
            $sort:{totalQuantity:-1}
        },
        //cuarta etapa: Crear el objeto que guardaremos en la base de datos.
        {
            $group:{
                _id:1,
                orders:{$push:"$$ROOT"}
            }
        },
        //Quinta etapa: Preparacion de la informacion para guardar
        {
            $project:{
                _id:0,
                orders:"$orders"
            }
        },
        //Sexta etapa: Guardar el documento en la base de datos ->Repote.
        {
            $merge:{
                into:"reports"
            }
        }
    ]);
    console.log("result", result);
}
operations();