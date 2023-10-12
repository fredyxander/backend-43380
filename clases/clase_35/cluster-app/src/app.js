import express from "express";
import cluster from "cluster";
import os from "os";

const numsCores = os.cpus().length;
// console.log(numsCores);

const port = 8080;
const app = express();

// console.log(cluster.isPrimary);

if(cluster.isPrimary){
    console.log(`Soy el proceso principal ${process.pid}`);
    for(let i=0;i<numsCores;i++){
        cluster.fork();//generando un nuevo proceso worker
    }

    cluster.on("exit",(worker)=>{
        console.log(`Este proceso ${worker.process.pid} fallo`);
        cluster.fork();//generamos un nuevo worker que remplace al que fallo
    });
} else {
    // console.log(`Soy un proceso worker ${process.pid}`);
    app.listen(port,()=>console.log(`Servidor corriendo con el proceso ${process.pid} escuchando en el puerto ${port}`));

    app.get("/",(req,res)=>{
        res.send(`Respondio el proceso ${process.pid}`);
    });

    app.get("/operacionSencilla",(req,res)=>{
        let sum=0;
        for(let i=0;i<1000;i++){
            sum+=i;
        }
        res.send(`La suma es igual a ${sum}`);
    });

    app.get("/operacionCompleja",(req,res)=>{
        let sum=0;
        for(let i=0;i<5e7;i++){//50.000.000
            sum+=i;
        }
        res.send(`La suma es igual a ${sum}`);
    });
}
