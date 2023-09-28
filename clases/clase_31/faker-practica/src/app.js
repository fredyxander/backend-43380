import express from "express";
import { generateUser } from "./utils/helpers.js";

const port = 8080;
const app = express();

app.listen(port,()=>console.log(`Server listening on port ${port}`));

app.get("/api/users", (req,res)=>{
    const cant = parseInt(req.query.cant) || 100;
    let users = [];
    for(let i=0;i<cant;i++){
        const user = generateUser();
        users.push(user);
    }
    res.json({status:"success", data:users});
});