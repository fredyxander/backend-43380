import { usersModel } from "../models/users.model.js";

export class UsersMongo{
    constructor(){
        this.model = usersModel;
    };

    async get(){
        try {
            const users = await this.model.find();
            return users;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener los usuarios");
        }
    };


    async getById(id){
        try {
            const user = await this.model.findById(id);
            if(!user){
                throw new Error("El usuario no existe");
            } else {
                return user;
            }
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al obtener el usuario");
        }
    };


    async save(user){
        try {
            const userCreated = await this.model.create(user);
            return userCreated;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al crear el usuario");
        }
    };

    async update(id,user){
        try {
            const userUpdate = await this.model.findByIdAndUpdate(id, user, {new:true});
            return userUpdate;
        } catch (error) {
            console.log(error.message);
            throw new Error("Hubo un error al actualizar el usuario");
        }
    };
};
