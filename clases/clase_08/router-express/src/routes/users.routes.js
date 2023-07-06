import {Router} from "express";

const router = Router();

const users = [];

const isAdmin=true;
//middleware de endpoint
const middlewareEndpoint = (req,res,next)=>{
    if(isAdmin){
        req.variableExtra="www.google.com";
        next();
    } else {
        //rechazar la peticion
        res.json({status:"error", message:"no tienes permisos"});
    }
};

// http://localhost:8080/api/users/  === http://localhost:8080/api/users
router.get("/", middlewareEndpoint , (req,res)=>{
    // console.log("req", req)
    res.json({status:"success", data:users});
});

router.post("/", middlewareEndpoint ,(req,res)=>{
    const newUser = req.body;
    users.push(newUser);
    res.json({status:"success", message:"usuario creado"});
});

export {router as usersRouter}