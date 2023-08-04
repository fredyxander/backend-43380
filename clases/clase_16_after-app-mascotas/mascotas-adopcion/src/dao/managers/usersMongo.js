import { usersModel } from "../models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model=usersModel;
    };

    async createUser(user){
        try {
            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            throw error;
        }
    };

    async getUsers(){
        try {
            const users = await this.model.find().lean();
            return users;
        } catch (error) {
            throw error;
        }
    };

    async getUser(userId){
        try {
            const user = await this.model.findById(userId).populate("userPets");
            if(!user){
                throw new Error("El usuario no esta registrado");
            }
            return user;
        } catch (error) {
            throw error;
        }
    };

    async updateUser(userId, newInfo){
        try {
            const userUpdated = await this.model.findByIdAndUpdate(userId,newInfo,{new:true});
            if(!userUpdated){
                throw new Error("El usuario no esta registrado");
            }
            return userUpdated;
        } catch (error) {
            throw error;
        }
    };

};