import {Router} from "express";
import { usersService } from "../dao/index.js";

const router = Router();

router.get("/:uid",async(req,res)=>{
    try {
        const userId = req.params.uid;
        const user = await usersService.getUser(userId);
        res.json({status:"success", data:user});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const userInfo = req.body;
        const userCreated = await usersService.createUser(userInfo);
        res.json({status:"success", data:userCreated, message:"usuario creado"});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

router.put("/:uid/:pid",async(req,res)=>{
    try {
        const {uid,pid} = req.params;
        const user = await usersService.getUser(uid);
        user.userPets.push(pid);
        const result = await usersService.updateUser(uid,user);
        res.json({status:"success", data:result, message:"usuario actualizado"});
    } catch (error) {
        res.json({status:"error", message:error.message});
    }
});

export { router as usersRouter}