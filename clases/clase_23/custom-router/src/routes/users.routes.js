import { AppRouter } from "./app.routes.js";

class UsersRouter extends AppRouter{
    init(){
        this.get("/", ["PUBLIC"], (req,res)=>{
            res.sendSuccess("BIENVENIDO")
        });

        this.delete("/", ["ADMIN"] , (req,res)=>{
            res.sendClientError(new Error("No se pudo procesar la solicitud"));
        });

        this.get("/profile", ["USER", "ADMIN"] ,(req,res)=>{
            res.sendSuccess("info usuario");
        });
    };
}

export {UsersRouter};