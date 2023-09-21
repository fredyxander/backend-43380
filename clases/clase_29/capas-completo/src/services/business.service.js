import { businessDao } from "../dao/index.js";

export class BusinessService{
    static getAllBusiness = async()=>{
        return await businessDao.getAll();
    };

    static getBusinessById = async(id)=>{
        return await businessDao.getById(id);
    };

    static createBusiness = async(business)=>{
        return await businessDao.save(business);
    };

    static updateBusiness = async(id,business)=>{
        return await businessDao.update(id,business);
    };
};