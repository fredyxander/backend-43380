import {Router} from "express";

const router = Router();

const users = [];

// http://localhost:8080/api/users/  === http://localhost:8080/api/users
router.get("/",(req,res)=>{
    res.json({status:"success", data:users});
});

router.post("/",(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({status:"success", message:"usuario creado"});
});

export {router as usersRouter}