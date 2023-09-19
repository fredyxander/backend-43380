import { Router } from "express";
import { contactsDao } from "../dao/factory.js";
import { ContactDto } from "../dao/dto/contact.dto.js";

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
        const dataForm = req.body;
        console.log("dataForm",dataForm);
        const dtoInfo = new ContactDto(dataForm);
        console.log("dtoInfo",dtoInfo);
        const contactCreated = await contactsDao.create(dtoInfo);
        res.json({status:"success", data:contactCreated});
    } catch (error) {
        res.json({status:"error", error:error.message});
    }
});

export {router as contactsRouter};