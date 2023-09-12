//importar la capa de servicio
import { ToysService } from "../services/toys.service.js";

export class ToysController{
    static getToys(req,res){
        const toys = ToysService.getToys();
        res.json({status:"success", data:toys});
    };

    static createToy(req,res){
        if(!req.body.title){
            return res.json({status:"error", message:"datos invalidos"});
        }
        const result = ToysService.createToy(req.body);
        res.json({status:"success", message:result});
    };

    static deleteToy(req,res){
        const toyId = parseInt(req.params.id);
        const result = ToysService.deleteToy(toyId);
        res.json({status:"success", message:result});
    };
};