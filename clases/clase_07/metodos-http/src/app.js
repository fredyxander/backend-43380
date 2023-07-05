import express from "express";

//definir el puerto
const port = 8080;

//definir la app
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//ejecutamos y levantamos el servidor
app.listen(port,()=>console.log(`Server listening on port ${port}`));

let users = [];

//Creamos las rutas
app.get("/usuarios", (req,res)=>{
    res.send(users);
});

//post:crear un recurso
app.post("/usuarios", (req,res)=>{
    const user = req.body;
    // console.log("user", user);
    users.push(user);
    res.send("usuario creado");
});

//put: actualizar o modificar un recurso
app.put("/usuarios/:name", (req,res)=>{
    const userName = req.params.name;
    const newInfo = req.body;
    const userIndex = users.findIndex(user=>user.nombre === userName);
    if(userIndex>=0){
        users[userIndex]=newInfo;
        res.json({status:"success",message:"usuario actualizado"});
    } else {
        res.status(404).json({status:"error", message:"El usuario no existe"})
    }
});

// param1=>expression   ===> (param1)=>{return expression}

//delete: eliminar un recurso
app.delete("/usuarios/:name", (req,res)=>{
    const userName = req.params.name;
    const user = users.find(user=>user.nombre === userName);
    if(user){
        const newUsers = users.filter(user=>user.nombre !== userName);
        users = newUsers;
        res.json({status:"success", message:"usuario eliminado"});
    } else {
        res.status(404).json({status:"error", message:"el usuario no existe"});
    }
});