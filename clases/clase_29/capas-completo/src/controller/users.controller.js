import {UsersService} from "../services/users.service.js";

export class UsersController{
    static getUsers = async(req,res)=>{
        try {
            const users = await UsersService.getUsers();
            res.send({status:"success", result: users});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };

    static getUserById = async(req,res)=>{
        try {
            const userId = req.params.uid;
            const user = await UsersService.getUserById(userId);
            res.send({status:"success", result:user});
        } catch (error) {
            res.status(400).json({status:error, message:error.message});
        }
    };

    static saveUser = async(req,res)=>{
        try {
            const newUser = req.body;
            const userCreated = await UsersService.createUser(newUser);
            res.send({status:"success", result: userCreated});
        } catch (error) {
            res.status(400).json({status:"error", message:error.message});
        }
    };
};