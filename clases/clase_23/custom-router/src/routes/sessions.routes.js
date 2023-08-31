import { AppRouter } from "./app.routes.js";
import jwt from "jsonwebtoken";
import { config } from "../config/index.js";

export class SessionsRouter extends AppRouter{
    init(){
        this.post("/login", ["PUBLIC"], (req,res)=>{
            const user = {
                email:req.body.email,
                role: req.body.role
            }
            const token = jwt.sign(user,config.secretToken);
            res.sendSuccess(token);
        });
    };
}