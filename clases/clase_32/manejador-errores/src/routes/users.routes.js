import { Router } from "express";
import { CustomError } from "../services/error/customError.service.js";//estructura error
import { EError } from "../enums/EError.js";//tipos de error
import { createUserErrorMsg } from "../services/error/createUserError.service.js"; //msg error personalizado
import { invalidParamMsg } from "../services/error/invalidParamUser.service.js";

const router = Router();

const users = [
    {id:1,name:"pepe", lastname:"perez", email:"pepe@gmail.com"}
];

router.get("/",(req,res)=>{
    res.json({status:"success", data:users});
});

router.post("/", (req,res)=>{
    const {name,lastname,email} = req.body;
    if(!name || !lastname || !email){
        //datos no validos, generar el error
        CustomError.createError({
            name:"error createUser",
            cause:createUserErrorMsg(req.body),
            message:"Datos invalidos para crear el usuario",
            errorCode: EError.INVALID_JSON
        });
    }
    users.push(req.body);
    res.json({status:"success", message:"usuario creado"});
});

router.get("/:uid", (req,res)=>{
    const uid = req.params.uid;// parametro en formato tipo string
    const userId = parseInt(uid); //formato numerico
    if(Number.isNaN(userId)){
        CustomError.createError({
            name:"userById error",
            cause:invalidParamMsg(uid),
            message:"Parametro invalido para buscar el usuario",
            errorCode:EError.INVALID_PARAM
        });
    }
    res.json({status:"success", message:"usuario encontrado"});
});

export {router as usersRouter};