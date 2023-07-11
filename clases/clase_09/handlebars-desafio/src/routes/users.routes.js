import { Router } from "express";

const router = Router();

const users=[];

router.post("/", (req,res)=>{
    const user = req.body;
    users.push(user);
    res.send("usuario agregado");
});

router.get("/",(req,res)=>{
    res.send(users);
});

export {router as usersRouter};