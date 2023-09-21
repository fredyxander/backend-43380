import {BusinessService} from "../services/business.service.js";

export class BusinessController{
    static getAllBusiness = async(req,res)=>{
        try {
            const business = await BusinessService.getAllBusiness();
            res.send({status:"success", result: business});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static getBusinessById = async(req,res)=>{
        try {
            const businessId = req.params.bid;
            const business = await BusinessService.getBusinessById(businessId);
            res.send({status:"success", result: business});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static createBusiness = async(req,res)=>{
        try {
            const newBusiness = req.body;
            const businessCreated = await BusinessService.createBusiness(newBusiness);
            res.send({status:"success", result: businessCreated});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static addProduct = async(req,res)=>{
        try {
            const businessId = req.params.bid;
            const newProduct = req.body;
            //sería bueno agregar validaciones para el producto, ya no tenemos un modelo de productos en mongoose.
            if(!newProduct.title || !newProduct.price){
                res.status(400).json({status:error, message:"Campos incompletos"});
            }
            const business = await BusinessService.getBusinessById(businessId);
            business.products.push(newProduct);
            const businessUpdate = await BusinessService.updateBusiness(businessId, business);
            res.send({status:"success", result: businessUpdate});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };
};