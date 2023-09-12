//en la capa de servicio importamos la capa de persistencia
import { toysDao } from "../dao/index.js";

export class ToysService{
    static getToys(){
        return toysDao.get();
    };

    static createToy(toyInfo){
        return toysDao.create(toyInfo);
    };

    static deleteToy(id){
        return toysDao.delete(id);
    };
}