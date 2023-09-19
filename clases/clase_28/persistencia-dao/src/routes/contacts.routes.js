import { Router } from "express";
import { contactsDao } from "../dao/index.js";

const router = Router();

router.get("/", async(req,res)=>{
    try {
        const contacts = await contactsDao.get();
        res.json({status:"success", data:contacts});
    } catch (error) {
        res.json({status:"error", error:error.message});
    }
});

router.post("/", async(req,res)=>{
    try {
        const contactCreated = await contactsDao.create(req.body);
        res.json({status:"success", data:contactCreated});
    } catch (error) {
        res.json({status:"error", error:error.message});
    }
});

export {router as contactsRouter};