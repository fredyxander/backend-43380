import { usersDao } from "../dao/index.js";

export class UsersService{
    static getUsers = async()=>{
        return await usersDao.get();
    };

    static getUserById = async(id)=>{
        return await usersDao.getById(id);
    };

    static createUser = async(user)=>{
        return await usersDao.save(user);
    };

    static updateUser = async(id,user)=>{
        return await usersDao.update(id,user);
    };
};